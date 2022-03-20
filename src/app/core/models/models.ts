export interface User {
    
    name: String, 
    username: String,
    email: String,
    password: String,
    image: String,
    posts:[]    
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
    _id: string,
    createdAt :string;
    
}
