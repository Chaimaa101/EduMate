<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function login(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|min:6',
        ]);

        // Attempt to authenticate the user based on email and password
        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)){
            return response()->json([
                'user' => $user,
                
            ]);
        }

        // If authentication fails, return error response
        return response()->json(['error' => 'Unauthorized'], 401);
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
    public function createUser(Request $request)
    {
        $infos =  $request->validate([
            'firstname' =>'required',
            'lastname' =>'required',
            'email' =>'required',
            'password' => 'required'
        ]);
        $user = User::create($infos);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function updateUser(Request $request, User $user)
    {
        // Validate input data
        $validatedData = $request->validate([
            'firstname' => 'nullable|string|max:255',
            'lastname' => 'nullable|string|max:255',
            'email' => 'nullable|email|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);
        // Update the user
        $user->update($validatedData);


        return response()->json(['message' => 'User updated successfully'], 200);
    }
     
    public function destroy(User $user)
    {
        //
    }
}
