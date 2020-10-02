import {IClient} from '../interfaces/i-client';
import {ClientVat} from './client-vat';

export class Client implements IClient {
    ClientId: number;
    Name: string;
    IdCard: string;
    BirthYear: number;
    Username: string;
    Password: string;
    GreenUsername: string;
    GreenPassword: string;
    LastUpdate: Date;
    Vats: ClientVat[];

    constructor(client?: Client) {
        if (!client) return;

        this.ClientId = client.ClientId;
        this.Name = client.Name;
        this.IdCard = client.IdCard;
        this.BirthYear = client.BirthYear;
        this.Username = client.Username;
        this.Password = client.Password;
        this.GreenUsername = client.GreenUsername;
        this.GreenPassword = client.GreenPassword;
        this.LastUpdate = client.LastUpdate;
    }
}