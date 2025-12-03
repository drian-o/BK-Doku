<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class SettingWebController extends Controller
{
    public function index()
    {
        return view('backoffice.setting.setting');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'web' => 'required|string',
            'icon' => 'required|image|mimes:png,jpg,jpeg,webp,gif|max:4048',
            'logo' => 'required|image|mimes:png,jpg,jpeg,webp,gif|max:4048',
            'whatsapp' => 'required|string',
            'telegram' => 'required|string',
            'livechat' => 'required|string',
            'telp' => 'required|string',
            'running_text' => 'required|string',
            'theme' => 'required|string',
            'seo' => 'required|string',
        ], [
            'icon.required' => 'The icon field is required.',
            'icon.image' => 'The icon must be an image.',
            'icon.mimes' => 'The icon must be a file of type: png, jpg, jpeg, webp , gif',
            'icon.max' => 'The icon may not be greater than 2048 kilobytes.',
            'logo.required' => 'The logo field is required.',
            'logo.image' => 'The logo must be an image.',
            'logo.mimes' => 'The logo must be a file of type: png, jpg, jpeg, webp, gif',
            'logo.max' => 'The logo may not be greater than 2048 kilobytes.',
            'whatsapp.required' => 'The whatsapp field is required.',
            'telegram.required' => 'The telegram field is required.',
            'livechat.required' => 'The livechat field is required.',
            'telp.required' => 'The telp field is required.',
            'running_text.required' => 'The running text field is required.',
            'theme.required' => 'The theme field is required.',
            'seo.required' => 'The seo field is required.',
        ]);

        // Additional validation to prevent JavaScript injection
        $this->validateNoJavaScript($request);

        // Process file uploads if validation passes
        if ($request->file('icon')) {
            $validated['icon'] = $request->file('icon')->store('post-images');
        }

        if ($request->file('logo')) {
            $validated['logo'] = $request->file('logo')->store('post-images');
        }

        $validated['user_id'] = auth()->user()->id;
        Setting::create($validated);

        return redirect('/Admin/Dashboard')->with('success', 'Setting Web Berhasil Dibuat!');
    }

    private function validateNoJavaScript(Request $request)
    {
        $rules = [
            'web' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'whatsapp' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'telegram' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'livechat' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'telp' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'running_text' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'theme' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
            'seo' => ['required', 'string', 'not_regex:/<script\b[^>]*>(.*?)<\/script>/i'],
        ];

        $messages = [
            'not_regex' => 'The :attribute field contains invalid characters.',
        ];

        $request->validate($rules, $messages);
    }
}
