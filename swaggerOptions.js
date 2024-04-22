const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend Server Starter App',
            version: '1.0.0 - BETA',
            description: 'Documentation for BSSA',
        },
        servers: [
            {
                url: 'http://localhost:3000', // Replace with your server URL
            },
        ],
        components: {
            schemas: {
                Signup: {
                    type: 'object',
                    required: ['name', 'email', 'password'],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User name',
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
                            description: 'Base64 encoded image string of the user profile picture',
                        },
                    },
                },

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

                Update: {
                    type: 'object',
                    required: [],
                    properties: {
                        name: {
                            type: 'string',
                            description: 'User name',
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
                            description: 'Base64 encoded image string of the user profile picture',
                        },
                    },
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
