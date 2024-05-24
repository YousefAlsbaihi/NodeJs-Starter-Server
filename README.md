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
- /auth/delete-user/{userId}

### Moderation Routes
- /mod/users
- /mod/update-user/{userId}
- /mod/create-user
- /mod/ban-user/{userId}
- /mod/delete-user/{userId}
  
### Search Route
- /search/q/

### Other Routes
- api-docs/ " This route will open Swager UI documentation "

<br> <br>

# API Response Table
<br> <br>
## Registeration API 
  
  No Permission required
  <br>

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

<br>

| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 106  | false  | Invalid Credentials / Wrong email or password  | /auth/login  |
| 107  | false  | Error loginin in, see console for error details  | /auth/login  |
| 115  | false  | Account us banned  | /auth/login  |
| 202  | true  | Login success  | /auth/login |


<br> <br>
## Update User API 
  
  Permission required: update_profile
  
  <br>

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



## Delete User API 
    
  Permission required: delete_account
  
  <br>

| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 108  | false  | Token is not provided  | /auth/delete-account  |
| 109  | false  | Token provided is not valid  | /auth/delete-account  |
| 110  | false  | User not found based on the token provided  | /auth/delete-account |
| 344  | false  | User password not provided  | /auth/delete-account |
| 341  | false  | Wrong password | /auth/delete-account |
| 342  | false  | Error deleting user, see console for error details  | /auth/delete-account |
| 508  | true  | User deleted successfully  | /auth/delete-account |

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

## User delete their account<br>
Permission: delete_account<br>
/auth/delete-account/user_id<br><br>

| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 344  | false  | Password is not provided  | /auth/delete-account/user_id  |
| 340  | false  | User not found to delete  | /auth/delete-account/user_id  |
| 341  | false  | Incorrect Password | /auth/delete-account/user_id |
| 342  | false  | Something went wrong and user not deleted from mongoDB  | /auth/delete-account/user_id |
| 344  | false  | Error deleting user, see console for error details  | /auth/delete-account/user_id |
| 509  | true  | User deleted successfully  | /auth/delete-account/user_id |

<br><br>


## Mod Delete user account <br>
Permission: mod_delete_users<br>
/mod/delete-user/user_id<br><br>


| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 340  | false  | User not found to delete  | /auth/delete-account/user_id  |
| 342  | false  | Something went wrong and user not deleted from mongoDB  | /auth/delete-account/user_id |
| 344  | false  | Error deleting user, see console for error details  | /auth/delete-account/user_id |
| 509  | true  | User deleted successfully  | /auth/delete-account/user_id |




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
<br><br>
### Moderators Available Permissions

| Permission  | Usage |
| ------------- | ------------- |
| mod_all_users  | User have access to make a call to see all users in the database |
| mod_update_users  | User have the ability to update any user details in the database |
| mod_create_users  | User can create users accounts and assign permissions to them |
| mod_ban_users | User can banned any other user  |
| mod_delete_users | Moderator can delete users accounts |
| mod_search | User can search for other users with Moderator fields defined in the .env file |

### Users Available Permissions

| Permission  | Usage |
| ------------- | ------------- |
| update_profile  | Users can update their own account informations if they have this permission in their account |
| search_users | User can search for other users  |
| delete_account | User can delete their own accounts  |

<br><br><hr>


# Search for users 
Permission: search_users<br>
Permission for Moderator: search_users and mod_search<br>
<br><br>
**The search is available for all users and mods, if you want to allow any user to search, you give the permission search_user and the allowed search fields are located inside the .evn file where you will find what fields are users and mods allowed to search based on**
<br><br>
Search fields for <br>Mods MOD_SEARCH_FIELDS=id,name,email,active,profile_picture,permissions,createdAtMin,createdAtMax,updatedAtMax,updatedAtMin 
<br><br>
Searchable fields for users<br>
USERS_SEARCH_FIELDS=name,email<br>

<br>
If you want to give a user permission to search as Mod you can add extra permission value 
mod_search 
<br>
Note that users & mods cannot search if they don’t have the basic permission “search_users”<br>

<br><br>

### Search query depends on the the following query parameters where you can mix and match


| parameter  | value |
| ------------- | ------------- | 
| name  | String |
| email  | String |
| hasProfilePicture  | boolean |
| permission  | array |
| createdAtMin  | date |
| createdAtMax  | date |
| updatedAtMin  | date |
| updatedAtMax  | date |

Example call <br>
```example.com/search/q/?active=false&permission=update_profile&hasProfilePicture=false```
<br>

Response

| Code  | Success | Message  | Route |
| ------------- | ------------- | ------------- | ------------- |
| 409  | false  | Cannot search with requested field  | /search/q/?{search_term}  |
| 410  | false  | Error searching for users, see console for error details  | /search/q/?{search_term} |
| 511  | true  | User search successful  | /search/q/?{search_term} |

<hr>


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
MOD_PER_PAGE_USERS=50<br><br>
**Moderation searchable fields for users**<br> 
MOD_SEARCH_FIELDS=id,name,email,active,profile_picture,permissions,createdAtMin,createdAtMax,updatedAtMax,updatedAtMin<br> <br> 
**Moderation searchable fields for users**<br> 
USERS_SEARCH_FIELDS=name,email<br> <br> 
**Allowrd origins**<br> 
ALLOWED_ORIGINS=http://localhost:3001,http://localhost:3002<br> <br> 

**Files and pictures storage**<br> 
#### the main upload folder is the folder that has all other folders inside it<br> 
MAIN_UPLOAD_FOLDER=uploads<br> <br> 
#### Child folders to upload the profile pictures in this case the path will be "uploads/profile_pictures"<br> 
PROFILE_PICTURES_UPLOAD_FOLDER=profile_pictures

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
