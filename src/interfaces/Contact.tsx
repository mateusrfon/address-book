import AddressInterface from './Address';

export default interface ContactInterface {
    name: string;
    email: string;
    birthDate: string;
    address: AddressInterface;
}
