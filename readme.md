1. Init project and structure
    - install all dependencies
    - set index.js as entry file

2. Setup development enviroment
    - install express js and nodemon
    - install handlebars
    - configure bodyparser
    - configre routes
    - install mongoose and connect to the database

3. Add images and css in public folder

4. Add html files in views folder
    - configure view engine
    - add main layout
    - fix hyperlinks
    - render hme page in hbs

5. Authentication
- user controller
- add controller to routes
- fix navigations in the nav bar (login, register, logout)
- render login page
- render register page

6. Add User model
- simple validation in Schema
- add method for register
- create first User record in the db
- validate password
- validate email

7. Hash password
- install bcrypt
- hash password

8. Login
    - find user by email
    - validate password with hash

9. Generate jsonwebtoken
- install jsonwebtoken
- promisify jsonwebtoken
- generate secret
- generate token in service login

10. Return token in cookie
- install cookie-parser
- config cookie-parser
- set cookie with the token

11. Implement Logout


