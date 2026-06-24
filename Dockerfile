# ==============================================================================
# Tahap 1: Build Stage (Untuk instalasi Composer)
# ==============================================================================
FROM composer:2 AS build
WORKDIR /app

# Salin file konfigurasi composer terlebih dahulu (optimalisasi cache docker)
COPY composer.json composer.lock ./

# Salin seluruh file sisa aplikasi
COPY . /app

# Instal dependensi PHP (hanya produksi)
RUN composer install --ignore-platform-reqs --no-dev --optimize-autoloader --no-interaction

# ==============================================================================
# Tahap 2: Final Runtime Stage (Hanya aplikasi yang dibutuhkan)
# ==============================================================================
FROM php:8.2-fpm-alpine

# Instal dependensi sistem yang diperlukan untuk menjalankan Laravel
# PERBAIKAN SINTAKSIS: Menggunakan backslash (\) yang benar dan menggabungkan perintah dengan &&
# Instal dependensi sistem yang diperlukan untuk menjalankan Laravel
RUN apk add --no-cache \
    nginx \
    git \
    curl \
    supervisor \
    libxml2-dev \
    openssl \
    oniguruma-dev \
    zip \
    unzip \
    bash \
    linux-headers \
    && docker-php-ext-install pdo_mysql exif pcntl bcmath opcache sockets

# PERBAIKAN 1: TINGKATKAN BATAS MEMORI UNTUK MENGATASI 504
RUN echo 'memory_limit = 512M' > /usr/local/etc/php/conf.d/zz-memory-limit.ini

# Tetapkan Working Directory
WORKDIR /app

# Salin VENDOR dari build stage
COPY --from=build /app/vendor /app/vendor

# Salin SEMUA file aplikasi dari host
COPY . /app

# Atur izin folder (Sangat Penting untuk Laravel di Linux)
# PERBAIKAN SINTAKSIS: Memperbaiki pemisah perintah agar tidak error saat build
RUN mkdir -p /app/storage /app/bootstrap/cache \
    && chown -R www-data:www-data /app/storage /app/bootstrap/cache \
    && chmod -R 775 /app/storage /app/bootstrap/cache

# Expose Port 8000
EXPOSE 8000

# PERBAIKAN 2: GUNAKAN STARTUP COMMAND YANG BENAR-BENAR STABIL
# Jangan gunakan '& tail -f /dev/null' di production karena jika artisan serve mati, container tetap dikira hidup oleh Coolify.
# Kita pastikan storage di-link dan cache dibersihkan setiap container baru menyala.
CMD php artisan storage:link && php artisan config:cache && php artisan route:cache && php artisan serve --host=0.0.0.0 --port=8000
