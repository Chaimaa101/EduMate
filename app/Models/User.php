<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasFactory;
    use HasApiTokens;

    protected $fillable = [
        'firstname',
        'lastname',
        'email',
        'password',
    ];
}
