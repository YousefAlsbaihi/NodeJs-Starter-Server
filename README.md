# NodeJs Starter Server
This NodeJs starter server has all the basic functions for users to start and security implemented using JWT and password hashed using bcryptjs

# Project Title

NodeJs server with Users functionalities using MongoDB

## About The Project

NodeJs server with Users functionalities **Signup**, **Login**, **Update** and connected to MongoDB as database and JWT token authentication
very simple code and easy to read, use and extend.

### Built With

List the libraries used in this project :
- Express
- dotenv
- nodemon
- bcryptjs
- jsonwebtoken
- mongoose


# Available Routes
- /auth/login
- /auth/register
- /auth/update
- api-docs/ " This route will open Swager UI documentation "



# API Response Table

## Registeration API 
### Example Call
```bash
curl -X POST \
  http://localhost:3000/auth/register \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "email@example.com",
    "password": "12345",
    "name": "John Doe",
    "profile_picture": "data:image/png;base64,iVBORw0KGgoAAAA"
  }'
```
| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 101  | false  | Not Valid Email Address  | /auth/register  |
| 102  | false  | Password doesn’t meet the minimum required characters count  | /auth/register  |
| 103  | false  | Email already registered | /auth/register |
| 104  | false  | ​​Error while saving profile picture  | /auth/register |
| 105  | false  | Error registering user, see console for error details  | /auth/register |
| 201  | true  | Register Successful  | /auth/register |



## Login API 
### Example Call
```bash
curl -X POST \
  http://localhost:3000/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "email@example.com",
    "password": "12345"
  }'
```
| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 106  | false  | Invalid Credentials / Wrong email or password  | /auth/login  |
| 107  | false  | Error loginin in, see console for error details  | /auth/login  |
| 202  | true  | Login success  | /auth/login |


## Update User API 
### Example Call
```bash
curl -X PUT \
  http://localhost:3000/auth/register \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer 9das0d90ka9sdk' \
  -d '{
    "email": "email@example.com",
    "password": "12345",
    "name": "John Doe",
    "profile_picture": "data:image/png;base64,iVBORw0KGgoAAAA"
  }'
```
| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 108  | false  | Token is not provided  | /auth/update  |
| 109  | false  | Token provided is not valid  | /auth/update  |
| 110  | false  | User not found based on the token provided  | /auth/update |
| 111  | false  | Error saving profile picture for user update details  | /auth/update |
| 112  | false  | Error updating user details, see console for error details  | /auth/update |
| 203  | true  | User details updated successfully  | /auth/update |





### Installation

Step-by-step guide on how to install the project.

```bash
# Clone the repository
git clone https://github.com/YousefAlsbaihi/NodeJs-Starter-Server.git

# Navigate to the project directory
cd NodeJs-Starter-Server

# Install dependencies
npm install

# Create .env file
Rename the file "env.sample" to ".env" and add MongoDB url and configure it.

# Run The Server
npm start

App has nodemon installed so any changes to the files will be auto refreshed to the server
