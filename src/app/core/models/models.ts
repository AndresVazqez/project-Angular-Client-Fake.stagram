export interface User {
    
    name: String, 
    username: String,
    email: String,
    password: String,
    image: String,
    posts:[],
    website: string,
    biography: string,
    emailcontact: string,
    telephone: string,
    gender:string
    _id: string    
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

export interface UserEdit {

    name: String, 
    username: String,   
    image: String,
    website: string,
    biography: string,
    emailcontact: string,
    telephone: string,
    gender:string 

}