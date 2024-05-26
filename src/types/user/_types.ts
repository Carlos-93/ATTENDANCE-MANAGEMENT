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
    input: Date | null;
    output: Date | null;
    mdl_user: {
        id: number;
        firstname: string;
        lastname: string;
        imagesrc?: string;
    };
}