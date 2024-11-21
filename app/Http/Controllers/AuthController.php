<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

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
        $infos = $request->validate([
            'email' => ['required', 'max:255', 'email'],
            'password' => ['required']
        ]);


        if (Auth::attempt($infos, $request->remember)) {

            return response()->json(['message' => 'Login successful'], 200);
        } else {
            return back()->withErrors([
                'failed' => 'The provider credentials do not match our records.'
            ]);
        }
    }
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

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
        $validated = $request->validate([
            'firstname' => 'required|max:255',
            'lastname' => 'required|max:255',
            'email' => 'required|email|max:255',
            'password' => 'nullable|min:8',
        ]);

        $user = User::findOrFail($id);

        $user->firstname = $validated['firstname'];
        $user->lastname = $validated['lastname'];
        $user->email = $validated['email'];
        if (!empty($validated['password'])) {
            $user->password = Hash::make($validated['password']);
        }
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
