# FAQ Management System

## Overview

This is a **Node.js + Express.js + MongoDB** API for managing FAQs with **multi-language translation support, caching (Redis).


## Table of Contents

1. Prerequisites
2. Installation
3. Configuration
4. Running the Application


## Prerequisites

Before setting up the application, ensure you have the following installed:

1. Node.js (Version 14 or higher)
2. MongoDB (Local or Cloud instance)
3. Docker(for running redis)

## Installation

1. Clone the Repository:

```bash
git clone https://github.com/Vipul-Vermaa/FAQs
cd FAQs
```
2. Install Dependencies:
```bash
npm install
```
3. Set Up Environment Variables:
```bash
MONGO_URI=your_mongo_uri
PORT=4000
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_USERNAME=your_redis_username
REDIS_PASSWORD=your_redis_password
FRONTEND_URL=your_frontend_url
```

## Configuration
1. Database Setup:

Ensure MongoDB is running. You can use a local instance or a cloud-based MongoDB service.

2. Redis setup

Use docker to run the Redis

## Running the Application
1. Using NodeJS:
```bash
npm start
```
2. Using Docker:
```bash
docker-compose up --build
```
The server will start on port 4000 by default. You can change the port by modifying the PORT variable in your .env file,which has to be made in root directory.

2. Verify the Server:

Open your browser or API client and navigate to http://localhost:4000. You should see a response indicating that the server is running.