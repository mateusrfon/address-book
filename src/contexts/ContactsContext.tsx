import { createContext } from 'react';
import ContactInterface from '../interfaces/Contact';

interface ContextDefaultValue {
    contacts: ContactInterface[];
    setContacts: React.Dispatch<React.SetStateAction<any>>;
}

const ContactsContext = createContext<ContextDefaultValue | null>(null);

export default ContactsContext;
