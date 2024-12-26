export type UserType = {
    id: string;
    username: string;
    name: string;
};

export type UserStateType = {
    authData?: UserType;
};
