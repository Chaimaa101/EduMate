<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $request->validate([
            'title' => ['required', 'max:255'],
            'content' => ['required'],
            'tag1' => ['required'],
            'tag2' => ['required'],
            'tag3' => ['nullable'],
            'image' => ['nullable', 'file', 'max:3000', 'mimes:png,jpg,webg']
        ]);
        $path = null;
        if ($request->hasFile('image')) {
            $path = Storage::disk('public')->put('posts_images', $request->image);
        }
        Blog::create([
            'title' => $request->title,
            'content' => $request->body,
            'tag1' => $request->tag1,
            'tag2' => $request->tag1,
            'tag3' => $request->tag1,
            'image' => $path
        ]);
        // Post::create(['user_id' => Auth::id(), ...$infos]);
        return back()->with('success', 'Your post was created');
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
