export interface User {
    
    name: String,
    lastname: String,
    username: String,
    email: String,
    password: String,
    image: String
}

export interface RegisterStatus {

    status: 'login' | 'signup' | '';
}