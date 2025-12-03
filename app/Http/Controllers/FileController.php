<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;

class FileController extends Controller
{
    public function download($file)
    {
       $filePath = public_path('storage/' . $file);

    if (file_exists($filePath)) {
        return response()->download($filePath, $file, [
            'Content-Type' => 'application/vnd.android.package-archive',
        ]);
    } else {
        abort(404);
    }
    }
}
