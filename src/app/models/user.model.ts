import { Address } from "./address.model";
import { Company } from "./company.model";

export interface IUser {
    id: number;
    name: string;
    email: string;
    username: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}