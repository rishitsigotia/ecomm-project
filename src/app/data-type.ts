export interface signUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name :string,
    color : string,
    description : string,
    price : number,
    image : string,
    category :string
}