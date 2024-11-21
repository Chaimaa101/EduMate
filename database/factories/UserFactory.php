<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
          $firstname = $this->faker->firstName();
        $lastname = $this->faker->lastName();

        return [
            'firstname' => $firstname,
            'lastname' => $lastname,
            'email' => strtolower("{$firstname}.{$lastname}@domain.com"),
            'password' => Hash::make("{$firstname}@123456"),
        ];
    }
}
