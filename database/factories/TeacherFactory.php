<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'firstname' => $this->faker->name(),
            'lastname' => $this->faker->name(),
            'phone' => $this->faker->phoneNumber(),
            'department' => $this->faker->randomElement([
                'Computer Science',
                'Mathematics',
                'Physics',
                'Biology'
            ]),
        ];
    }
}
