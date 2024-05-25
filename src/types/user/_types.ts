export interface User {
    id: number;
    role: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
}

export interface UserLogs {
    id: string;
    uid: string;
    input: string;
    output: string;
}