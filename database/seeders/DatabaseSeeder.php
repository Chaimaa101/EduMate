<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Cours;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        
        Student::factory(20)->create();
        Blog::factory(20)->create();
        Cours::factory(20)->create();
        User::factory(20)->create();

    }
}
