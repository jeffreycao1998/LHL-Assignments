# TinyApp Project

TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs (à la bit.ly).

## Final Product

# Login Form
When you first hit the root address this is the screen you will see. From here you can login to access all of your shortened URL's! If you try to access "My URLs" or "Create New URL" at the top of the navbar you will be redirected to this login form.

!["screenshot of the login form"](https://github.com/jeffreycao1998/LHL-Assignments/blob/master/w3/tinyapp/docs/login.png?raw=true)
# User Urls
Once logged in, you'll be redirected to the user-urls page. Here you'll find all the url's you've previously created, the day you created it, and the number of clicks (visits) that your short URL received! From this page you'll also be able to delete a url as well as go to the page where you can edit a URL.

!["screenshot of the main page which displays all of the users urls"](https://github.com/jeffreycao1998/LHL-Assignments/blob/master/w3/tinyapp/docs/user-urls.png?raw=true)
# Edit Url
The edit page is pretty simple, it basically just shows all the information of the url. You can also redirect yourself to the create a new short URL page, and update your URL endpoint through the form.

!["screenshot of the edit url page"](https://github.com/jeffreycao1998/LHL-Assignments/blob/master/w3/tinyapp/docs/edit.png?raw=true)

## Dependencies

- Node.js
- Express
- EJS
- bcrypt
- body-parser
- cookie-session

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.