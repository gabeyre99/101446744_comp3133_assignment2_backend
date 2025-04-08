# COMP3133 - Assignment 2 Backend  
**Name:** Sara Eisazadeh  
**Student ID:** 101432538  

## 🔥 Overview

This is the **Node.js + GraphQL backend** for the Employee Management System built for COMP3133 – Full Stack Development II. It powers the authentication and employee features used by the Angular frontend.

---

## 🧠 Tech Stack

- Node.js
- Express.js
- Apollo Server (GraphQL)
- MongoDB Atlas
- Mongoose (ODM)
- JWT (for authentication)

---

## 🔗 Deployed API

🌐 [https://comp3133-101432538-backend.onrender.com/graphql](https://comp3133-101432538-backend.onrender.com/graphql)

Use this endpoint with GraphQL clients or through the frontend.

---

## 🚀 Features

- ✅ Signup with hashed passwords (bcrypt)
- ✅ Login with JWT token generation
- ✅ GraphQL authentication with context
- ✅ Add / View / Update / Delete employees
- ✅ Search employees by department or position
- ✅ CORS enabled for frontend communication
- ✅ Works seamlessly with Angular Apollo Client

---

## 🧬 GraphQL Overview

### 🧾 Queries

```graphql
login(usernameOrEmail: String!, password: String!): AuthPayload
getAllEmployees: [Employee]
getEmployeeById(eid: ID!): Employee
searchEmployee(department: String, designation: String): [Employee]
✏️ Mutations
signup(username: String!, email: String!, password: String!): AuthPayload
addEmployee(...)
updateEmployee(...)
deleteEmployee(eid: ID!): String