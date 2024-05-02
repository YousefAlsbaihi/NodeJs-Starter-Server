const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Server Starter App',
            version: '1.0.0 - BETA',
            description: 'Documentation for Stand alone Nodejs starter',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Replace with your server URL
            },
        ],
        components: {
            schemas: {
                Login: {
                    type: 'object',
                    required: ['email', 'password'],
                    properties: {
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                        },
                    },
                },
                Signup: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User Full Name',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                        },
                    },
                },
                Update_account: {
                    type: 'object',
                    required: ['name', 'email'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User Full Name',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                        },
                        profile_picture: {
                            type: 'string',
                            format: 'binary',
                            description: 'Profile picture file upload',
                        },
                    },
                },
                get_users: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
                Update_account_mod: {
                    type: 'object',
                    required: ['name', 'email'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User Full Name',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                        },
                        profile_picture: {
                            type: 'string',
                            format: 'binary',
                            description: 'Profile picture file upload',
                        },
                        permissions: {
                            type: 'array',
                            description: 'Array of permissions for the user',
                            items: {
                                type: 'string',
                            },
                            example: ['update_profile', 'mod_all_users', 'mod_update_users', 'mod_create_users', 'mod_ban_users'],
                        },
                    },
                },
                Create_account_mod: {
                    type: 'object',
                    required: ['name', 'email'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User Full Name',
                        },
                        email: {
                            type: 'string',
                            format: 'email',
                            description: 'User email',
                        },
                        password: {
                            type: 'string',
                            description: 'User password',
                        },
                        file: {
                            type: 'string',
                            format: 'binary',
                            description: 'Profile picture file upload',
                        },
                        permissions: {
                            type: 'array',
                            description: 'Array of permissions for the user',
                            items: {
                                type: 'string',
                            },
                            example: ['update_profile', 'mod_all_users', 'mod_update_users', 'mod_create_users', 'mod_ban_users'],
                        },
                    },
                },
                Ban_unban_user: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                    },
                }
            },
            securitySchemes: { // Define security scheme for bearer token
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            responses: {
                BadRequest: {
                    description: 'Bad request, validation failed or email already in use',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
                InternalServerError: {
                    description: 'Internal server error',
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/Error',
                            },
                        },
                    },
                },
            },
            Error: {
                type: 'object',
                properties: {
                    success: {
                        type: 'boolean',
                        description: 'Indicates if the request was successful',
                    },
                    code: {
                        type: 'integer',
                        description: 'Error code',
                    },
                    message: {
                        type: 'string',
                        description: 'Error message',
                    },
                    error: {
                        type: 'string',
                        description: 'Optional error details',
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.js'], // Path to the API routes folder
};

module.exports = swaggerOptions;
