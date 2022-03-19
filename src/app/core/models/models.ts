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

export interface Image {

    src:string,
    alt: string
}
export interface Button {

    name:string
}

export interface UserLogin {

    email:string,
    password:string
}
export interface UserRegister {

    email:string,
    name:string,
    username:string,
    password:string,
    
}

export interface UserPost {

    image:File;
    caption:string,
    userId:string | null;
    
}
