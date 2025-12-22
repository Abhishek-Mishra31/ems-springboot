# 📅 Event Management System (EMS)

A full-stack **Event Management System** built using **Spring Boot** backend and **React** frontend. The application provides RESTful CRUD APIs to manage events with a modern, responsive user interface. Uses **MySQL** for data persistence and follows a clean layered architecture.

---

## 🚀 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete events.
- **RESTful API Design**: Clean and standard API endpoints.
- **Modern Frontend**: React-based UI with Vite for fast development.
- **Data Persistence**: Uses Spring Data JPA with MySQL.
- **Clean Architecture**: Organized into Controller, Service, Repository, and Model layers.
- **Pagination & Sorting**: Efficient data handling for large datasets.

---

## 🛠️ Tech Stack

### Backend
- **Language**: Java 17
- **Framework**: Spring Boot 3.3.5
- **ORM**: Spring Data JPA (Hibernate)
- **Database**: MySQL 8.0
- **Build Tool**: Maven

### Frontend
- **Framework**: React 19.2
- **Build Tool**: Vite 7.2
- **HTTP Client**: Axios
- **UI Components**: Lucide React Icons
- **Routing**: React Router DOM

---

## 📂 Project Structure

```text
demo/
├── src/main/java/com/example/demo/
│   ├── controller/      # REST API Endpoints
│   ├── service/         # Business Logic Layer
│   ├── repository/      # Database Communication (JPA)
│   ├── model/           # Data Entities/Models
│   └── DemoApplication.java  # Main Spring Boot Application
├── Frontend/
│   ├── src/             # React source files
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
├── pom.xml              # Maven configuration
└── README.md            # This file
```

---

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Java Development Kit (JDK) 17** or higher
- **Maven 3.6+** (or use the included Maven wrapper)
- **MySQL 8.0+** (running on localhost:3306)
- **Node.js 16+** and **npm** (for frontend)
- **Git** (for cloning the repository)

---

## ⚙️ Configuration

### Database Setup

1. **Create MySQL Database**:
   ```sql
   CREATE DATABASE ems_db;
   ```

2. **Update Database Configuration**:
   
   Edit `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/ems_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   
   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
   ```
   
   Replace `your_password` with your MySQL root password.

---

## 🚀 How to Run

### Backend (Spring Boot)



1. **Run the Spring Boot application**:
   
   **Option 1: Using Maven Wrapper**
   ```bash
   ./mvnw spring-boot:run
   ```
   
   **Option 2: Using Maven**
   ```bash
   mvn spring-boot:run
   ```
   
   **Option 3: Run DemoApplication.java directly**
   - Open the project in your IDE (IntelliJ IDEA, Eclipse, VS Code)
   - Navigate to `src/main/java/com/example/demo/DemoApplication.java`
   - Right-click and select "Run" or "Run Java"

3. **Verify Backend is Running**:
   - The application will start on `http://localhost:8080`
   - Check console for: `Started DemoApplication in X seconds`

### Frontend (React + Vite)

1. **Navigate to the Frontend directory**:
   ```bash
   cd Frontend
   ```

2. **Install Dependencies** (first time only):
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   - Open your browser and go to `http://localhost:5173`
   - The frontend will automatically connect to the backend API

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/events` | Get all events (with pagination) |
| GET | `/api/events/{id}` | Get event by ID |
| POST | `/api/events` | Create new event |
| PUT | `/api/events/{id}` | Update event |
| DELETE | `/api/events/{id}` | Delete event |

---

## 🧪 Testing the Application

1. **Backend**: The backend will be running on `http://localhost:8080`
2. **Frontend**: The frontend will be running on `http://localhost:5173`
3. Use the frontend UI to create, view, update, and delete events
4. Or use tools like Postman or curl to test the API endpoints directly

---

## 🛑 Troubleshooting

### Backend Issues
- **Port 8080 already in use**: Change the port in `application.properties`:
  ```properties
  server.port=8081
  ```
- **Database connection error**: Verify MySQL is running and credentials are correct
- **Maven build fails**: Ensure JDK 17+ is installed and JAVA_HOME is set

### Frontend Issues
- **Port 5173 already in use**: Vite will automatically try the next available port
- **Dependencies not found**: Run `npm install` in the Frontend directory
- **API connection error**: Ensure backend is running on `http://localhost:8080`

---

## 📝 License

This project is open source and available for educational purposes.

---

## 👨‍💻 Author

Built with ❤️ using Spring Boot and React

 **By Abhishek Kumar**
