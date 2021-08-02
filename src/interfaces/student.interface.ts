export interface Student { 
    id:number,
    userName:string,
    firstName:string,
    lastName:string,
    age:number,
    career:string
    image:string
}


export interface Students{
    students:Student[]
}

export interface studentsState { 
    loading: boolean;
    data: Students |any
    error: string| any;
}

export interface studentState { 
    loading: boolean;
    data: Student | any;
    error: string|any;
}