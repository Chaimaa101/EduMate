<h1 align="center">
	<img
		width="300"
		alt="EduMate"
		src="https://github.com/Chaimaa101/EduMate/blob/master/clientside/public/img/logo.jpg?raw=true">
</h1>

<h3 align="center">
	Edumate – Comprehensive Educational Management System
</h3>

## 📖 Table of Contents

<details>
<summary>Click to expand</summary>

- [📖 Table of Contents](#-table-of-contents)
- [📷Demo](#-Demo) 
- [⛓ Description ](#-description)
    - [User Management ](#User-Management)
    - [Course Management ](#Course-Management)
    - [Blog Management ](#Blog-Management)
    - [Student Management ](#Student-Management)
    - [Dashboard](#Dashboard)
    - [Dark Mode](#Dark-Mode)
- [🔨 Development](#-development)
    - [Tech Stack](#tech-stack)
- [☑️ Installation](#Installation)
    - [Prerequisites ](#Prerequisites)
    - [Backend Setup (Laravel ](#Backend-Setup-(Laravel))
    - [Frontend Setup (React) ](#Frontend-Setup-(React))
    - [Usage ](#Usage) 
</details>

# 📷 Demo: 

https://github.com/user-attachments/assets/8b341e89-d78c-4c01-aeff-8b787145f53d


# ⛓ Description:

<p align="center">
	Edumate is a dynamic educational management platform designed to streamline the management of users, courses, blogs, and student data. Built using Laravel for the backend and React for the frontend, it provides an intuitive interface and powerful features for administrators, teachers, and students.
</p>

## 1. User Management:
- User registration and login through a secure system.
- Profile management to update personal information and view details.
## 2. Course Management:
- Add, edit, and delete courses.
- Search and filter courses for easy access.

## 3. Blog Management:
- Create, update, and delete blog posts.
- View all blogs with details like title, content, and tags.
## 4. Student Management:
- View and manage student .
- Import/export student data for bulk updates.
- Search and filter students by criteria.
## 6. Dashboard:
- Display key metrics such as:
    - Total number of students, blogs, and courses.
    - Interactive graphs and statistics.
    - Quick navigation to important sections.

## 7. Dark Mode:
- Reduces eye strain in low-light environments.
- Provides a modern, sleek interface.
## 8. Light Mode:
- Optimal for bright environments.
- Ensures readability and clarity.

# 🔨 Development

## Tech Stack 
- Backend: [![Laravel](https://img.shields.io/badge/Laravel-11-red?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/)
- Frontend:[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
- Database:[![MySQL](https://img.shields.io/badge/MySQL-Database-orange?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)
- Testing: [![Postman](https://img.shields.io/badge/Postman-API%20Testing-orange?style=flat-square&logo=postman&logoColor=white)](https://www.postman.com/)
- Authentication: [![Laravel Sanctum](https://img.shields.io/badge/Auth-Laravel%20Sanctum-red?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/docs/10.x/sanctum)
- Styling: [![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Styling-teal?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
- API Integration: [![Axios](https://img.shields.io/badge/Axios-API%20Integration-lightgrey?style=flat-square)](https://axios-http.com/)

# ☑️ Installation

## Prerequisites
- PHP >= 8.1
- Composer
- Node.js >= 16.x
- MySQL or any compatible database


## Backend Setup (Laravel):

1. Install XAMPP or WAMPP.

2. Open XAMPP Control panal and start [apache] and [mysql] .

3. Download project from github (https://github.com/Chaimaa101/EduMate.git)  
    OR follow gitbash commands
    
    i> cd C:\\xampp\htdocs\
     ii> git clone https://github.com/Chaimaa101/EduMate.git
    
4. extract files in C:\\xampp\htdocs\.

5. open link localhost/phpmyadmin

6. click on new at side navbar.

7. give a database name as (edumate) hit on create button.

8. after creating database name click on import.

9. browse the file in directory[EduMate/database/onlineshop.sql].

10. after importing successfully.

11. open any browser and type http://localhost/EduMate.

12. first register and then login

13. admin login details  Email=admin@gmail.com or username = admin and Password=123456789.

## Frontend Setup (React):
1. Navigate to the frontend folder:
```shell
cd clientside
npm install
npm start
```

### Usage
1. Visit the registration page to create an account.
2. Log in to access your profile and manage data.
3. Navigate through the platform to manage courses, students, blogs, and reports.
4. Use the dashboard to monitor system statistics and activity.

