<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
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
            'class' => $this->faker->regexify('[1-12]-[A-E]'), 
            'dateAdmission' => $this->faker->date('Y-m-d'),
        ];
    }
}
