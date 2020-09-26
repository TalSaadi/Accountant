import {IClient} from '../interfaces/i-client';
import {ClientVat} from './client-vat';

export class Client implements IClient {
    ClientId: number;
    Name: string;
    Age: number;
    CompanyName: string;
    Address: string;
    LastUpdate: Date;
    Vats: ClientVat[];

    constructor(client?: Client) {
        if (!client) return;

        this.ClientId = client.ClientId;
        this.Name = client.Name;
        this.Age = client.Age;
        this.CompanyName = client.CompanyName;
        this.Address = client.Address;
        this.LastUpdate = client.LastUpdate;
    }
}