export interface User {
    id: number;
    role: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
}

export interface UserLogs {
    id: number;
    uid: string;
    input: Date | null;
    output: Date | null;
    mdl_user: {
        firstname: string;
        lastname: string;
    };
}