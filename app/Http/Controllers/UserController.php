<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

use function PHPSTORM_META\type;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        $data = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'birthday' => 'required',
            'type' => 'nullable'
        ]);

        $user = User::create($data);

        return response()->json(['message' => 'successfully', 'user' => $user], 201);
    }
}
