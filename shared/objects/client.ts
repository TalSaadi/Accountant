
export class Client {
    Name: string;
    Age: number;
    CompanyName: string;
    Address: string;
    LastUpdate: Date;

    constructor(client?: Client) {
        if (!client) return;

        this.Name = client.Name;
        this.Age = client.Age;
        this.CompanyName = client.CompanyName;
        this.Address = client.Address;
        this.LastUpdate = client.LastUpdate;
    }
}