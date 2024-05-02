# NodeJs Starter Server
This NodeJs starter server has all the basic functions for users to start and security implemented using JWT and password hashed using bcryptjs

## About The Project

NodeJs server with Users functionalities **Signup**, **Login**, **Update** and connected to **MongoDB** as database and JWT token authentication and users **Permissions**
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
### Users Routes
- /auth/login
- /auth/register
- /auth/update

### Moderation Routes
- /mod/users
- /mod/update-user/{userId}
- /mod/create-user
- /mod/ban-user/{userId}

### Other Routes
- api-docs/ " This route will open Swager UI documentation "

<br> <br>

# API Response Table
<br> <br>
## Registeration API 
  
  No Permission required
  
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



<br> <br>
## Login API 
 
 No Permission required

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
| 115  | false  | Account us banned  | /auth/login  |
| 202  | true  | Login success  | /auth/login |


<br> <br>
## Update User API 
  
  Permission required: update_profile
  
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
| 113  | false  | Email is already taken by another user | /auth/update |
| 112  | false  | Error updating user details, see console for error details  | /auth/update |
| 203  | true  | User details updated successfully  | /auth/update |

<br> <br>
# Moderation API 
<br> <br> 

## Mod get all users

URL: /mod/users

Permission required: mod_all_users


| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 301  | false  | Invalid Page Number | /mod/users  |
| 302  | false  | Invalid limit value  | /mod/users  |
| 302  | false  | Invalid sort or order parameters | /mod/users |
| 304  | false  | No users found  | /mod/users |
| 305  | false  | Error fetching users, see console for error details  | /mod/users |
| 501  | true  | Got users Successful  | /mod/users |


<br> <br>
## Mod update user by user id

/mod/update-user/{userId}

Permission required: mod_update_users


| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 310  | false  | User not found | /mod/update-user/{userId}  |
| 311  | false  | Email is already taken by another user  | /mod/update-user/{userId}  |
| 312  | false  | Password didn’t meet the minimum requirements | /mod/update-user/{userId} |
| 313  | false  | At least one permission has to be assigned for the user  | /mod/update-user/{userId} |
| 307  | false  | Error updating user details, see console for error details  | /mod/update-user/{userId} |
| 505  | true  | User Updated Successfully  | /mod/update-user/{userId} |



<br> <br>
## Mod Create User

/mod/create-user

Permission required: mod_create_users


| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 320  | false  | Email address not valid | /mod/create-user  |
| 321  | false  | Email is already taken by another user  | /mod/create-user  |
| 322  | false  | Password didn’t meet the minimum requirements | /mod/create-user |
| 323  | false  | At least one permission has to be assigned for the user  | /mod/create-user |
| 329  | false  | Error creating users, see console for error details  | /mod/create-user |
| 506  | true  | User Created Successfully  | /mod/create-user |


<br> <br>
## Mod Band user by user id

/mod/ban-user/{userId}

Permission required: mod_ban_users


| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 330  | false  | User not found | /mod/ban-user/{userId}  |
| 339  | false  | Error banning users, see console for error details  | /mod/ban-user/{userId} |
| 508  | true  | User banned Successfully  | /mod/ban-user/{userId} |

<br> <br> 
## Other Error Codes


Other Error Codes, associated with tokens and tokens issues such as not valid token or expired, and if not enough permission


| Code  | Success | Message |
| ------------- | ------------- | ------------- |
| 898  | false  | No token provided |
| 899  | false  | User not found based on the provided token |
| 897  | false  | Permission denied for the requested operation |
| 900  | false  | Invalid token |

<br> <br>
## Available Permissions
| Permission  | Usage |
| ------------- | ------------- |
| update_profile  | Users can update their own account informations if they have this permission in their account |
| mod_all_users  | User have access to make a call to see all users in the database |
| mod_update_users  | User have the ability to update any user details in the database |
| mod_create_users  | User can create users accounts and assign permissions to them |
| mod_ban_users  | User can banned any other user  |

<br> <br>
# .env file
In .env file you will find few settings for your app 


**Database URL in MongoDb**<br> 
DATABASE=

**Secret code to use for JWT**<br> 
JWT_SECRET=

**Minimum required password length for users, Recommended 6**<br> 
MIN_PASSWORD=6

**Token life time in hours/day use h for hours d for days, Recommended 12h**<br> 
TOKEN_LIFE=12h

**Number of users to return in each page for moderator when requesting all users, Recommended 50**<br> 
MOD_PER_PAGE_USERS=50

<br> <br> <br> 


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

**App has nodemon installed so any changes to the files will be auto refreshed to the server**
