import AddressInterface from './Address';

export default interface Contact {
    name: string;
    email: string;
    birthdate: string;
    address: AddressInterface;
}
