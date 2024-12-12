-- 1. Create the database
CREATE DATABASE learnlog;

-- 2. Use the learnlog database
USE learnlog;

-- 3. Create a table for learning logs
CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,      -- Unique ID for each log entry
    title VARCHAR(255) NOT NULL,           -- Title of the learning activity
    description TEXT NOT NULL,             -- Detailed description of the learning
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Automatically set to current time
);

-- 4. Insert sample data (optional)
INSERT INTO logs (title, description) VALUES 
('Learned Node.js Basics', 'Covered basic Express.js routing and middleware.'),
('Explored MySQL Integration', 'Set up MySQL with Node.js using mysql2 package.'),
('Designed EJS Templates', 'Created dynamic views with EJS and connected them to routes.');
