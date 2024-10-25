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
            'birthday' => $this->faker->date('Y-m-d', '2010-01-01'),
            'department' => $this->faker->randomElement([
                'Computer Science',
                'Mathematics',
                'Physics',
                'Biology'
            ]),
        ];
    }
}
