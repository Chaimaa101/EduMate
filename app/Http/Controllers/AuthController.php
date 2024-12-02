<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\HasApiTokens;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate input
        $validatedData = $request->validate([
            'firstname' => ['required', 'max:255'],
            'lastname' => ['required', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'min:8'], // Add any other rules as needed
        ]);

        // Hash the password after validation
        $validatedData['password'] = Hash::make($request->password);

        // Create the user
        $user = User::create($validatedData);

        // Log in the user
        Auth::login($user, $remember = false);

        return response()->json(['message' => 'User created successfully'], 200);
    }

    public function login(Request $request)
    {
        $validatedData = $request->validate([
            'email' => ['required', 'email', 'max:255'],
            'password' => ['required']
        ]);

        // Attempt login
        if (Auth::attempt($validatedData)) {
            // If login is successful
            $user = Auth::user(); // Retrieve the logged-in user
            // $token = $user->creatToken('authToken')->plainTextToken; // Generate an API token

            return response()->json([
                'message' => 'Login successful',
                'user' => $user,
                // 'token' => $token,
            ], 200);
        }

        // If login fails
        return response()->json([
            'message' => 'Invalid credentials. Please try again.',
        ], 401); // 401 Unauthorized status code
    }
    public function logout(Request $request)
{
        if ($request->user() && $request->user()->currentAccessToken()) {
            $request->user()->currentAccessToken()->delete();
        }

        return response()->json(['message' => 'Logged out successfully'], 200);
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
    public function update(Request $request, $id)
    {
        // Check incoming request data
        Log::info($request->all());

        // Validate input (if any validation logic is applied)
        $validated = $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|max:255',
        ]);

        // Find the user
        $user = User::findOrFail($id);

        // Update user information
        $user->update($validated);

        return response()->json(['message' => 'User updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
