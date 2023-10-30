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

12. Authentication middleware

- create middleware directory
- add auth middleware and import it in express config below cookieParser
- decode the token
- handle invalid token
- provide authorization

13. Dynamic navigation
- conditional options in navigation
- add data to res.locals for hbs template

14. Error Handling
- add 404 page
- redirect missing route to 404
- add global error handler (optional)
- add error message util

15. Show error notification
- show in the main layout
- pass error to render in login and register pages

16. Map pages to navigation in both LoggedIn and LoggedOut state
- created all-posts page and its routes, create page and profile page.


17. Implements dashboard page
- show each animal with image, name and description
- add details button to every animal
- If no animals "There are no posts yet..."

18. Add animal model to Mongoose





