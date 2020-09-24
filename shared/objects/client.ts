
export class Client {
    name: string;
    age: number;
    company_name: string;
    address: string;
    last_updated: Date;

    constructor(client?: Client) {
        if (!client) return;

        this.name = client.name;
        this.age = client.age;
        this.company_name = client.company_name;
        this.address = client.address;
        this.last_updated = client.last_updated;
    }
}