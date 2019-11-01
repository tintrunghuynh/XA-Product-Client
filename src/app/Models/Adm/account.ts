export class Account {
    _id: string;
    username: string;
    roles: [string];
    specifications: JSON;
    description: string;
    salt: string;
    hash: string;
    createdDate: Date;
    updatedDate: Date;
    status: string;
}
