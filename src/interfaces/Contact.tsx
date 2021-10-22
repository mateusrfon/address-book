import AddressInterface from './Address';

export default interface ContactInterface {
    name: string;
    email: string;
    birthdate: string;
    address: AddressInterface;
}
