# ems-springboot
EMS (Event Management System) built with Spring Boot and MySQL, featuring CRUD operations for event entities.

# 📅 Event Management System (EMS)

A backend **Event Management System** built using **Spring Boot** that provides RESTful CRUD APIs to manage events. The application uses **MySQL** for data persistence and follows a clean layered architecture.

---

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete events.
- **RESTful API Design**: Clean and standard API endpoints.
- **Data Persistence**: Uses Spring Data JPA with MySQL.
- **Clean Architecture**: Organized into Controller, Service, Repository, and Model layers.

---

## 🛠️ Tech Stack

- **Language**: Java
- **Framework**: Spring Boot
- **ORM**: Spring Data JPA (Hibernate)
- **Database**: MySQL
- **Build Tool**: Maven
- **Version Control**: Git & GitHub

---

## 📂 Project Structure

```text
src/main/java/com/example/demo/
├── controller   # REST API Endpoints
├── service      # Business Logic Layer
├── repository   # Database Communication (JPA)
└── model        # Data Entities/Models


## ⚙️ Configuration

Update the database configuration in `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems_db
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
