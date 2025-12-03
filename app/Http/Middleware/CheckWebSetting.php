<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Setting;

class CheckWebSetting
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
     public function handle($request, Closure $next)
    {
       
        $setting = Setting::orderBy('created_at', 'DESC')->first();

      
        if ($setting->maintenance == 1) {
            return response()->view('maintenance');
        }

        return $next($request);
    }
}