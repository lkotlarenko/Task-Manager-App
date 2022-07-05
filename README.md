# Ebyrt task-manager

  Task manager that allows to view all tasks in the database, add a task, delete, and update it's state 
  (option to edit task to be implemented)

 # Techs used
 
 - React
 - ContexAPI
 - Docker
 - Express.js
 - Typescript
 - Node.js
 - MySQL
 
# How to run the application:

 * Clone this rep: (SSH) `git clone git@github.com:SamuelDAlencar/ebyrt_test.git` in the terminal
 > This project runs using `docker`
 * Run these steps in order:
   1. Rename '.env.example' to '.env' and change the environment variable for db password
   2. Run `docker-compose up -d` in the terminal
   3. With the containers running healthy attach to the backend one and run `npm run db:restore` to generate default db