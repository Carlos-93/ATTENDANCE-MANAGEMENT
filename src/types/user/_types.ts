export interface User {
    id: number;
    role: string;
    username?: string;
    firstname: string;
    lastname: string;
    email: string;
    imagesrc?: string;
}

export interface UserLogs {
    id: number;
    uid: string;
    input: string;
    output: string;
    mdl_user: {
        id: number;
        role: string;
        firstname: string;
        lastname: string;
        imagesrc?: string;
    };
}