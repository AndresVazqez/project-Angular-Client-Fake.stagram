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
    gender:string,
    _id: string,
    liked:[]   
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
    
    map: any,
    image:File,
    caption:string,
    userId:User,
    _id: string,
    createdAt :string,
    likes:string[],
    likeByUser: boolean;
    
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

