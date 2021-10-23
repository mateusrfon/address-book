import React, { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ContactsContext from '../../contexts/ContactsContext';
import styled from 'styled-components';
import axios from 'axios';

import {
    IoPersonSharp,
    IoMailSharp,
    IoBalloonSharp,
    IoLocationSharp,
    IoBackspaceOutline,
    IoCheckboxOutline,
} from 'react-icons/io5';

import ContactInterface from '../../interfaces/Contact';
import ViacepInterface from '../../interfaces/Viacep';
import Container from '../../styles/Container';
import EnrollmentParams from '../../interfaces/EnrollmentParams';
import checkContactDataError from './checkContactDataError';

const Enrollment: React.FC = () => {
    const contactsContext = useContext(ContactsContext);
    const params = useParams() as EnrollmentParams;
    const history = useHistory();

    const [name, setName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [addressNumber, setAddressNumber] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [complement, setComplement] = useState('');

    useEffect(() => {
        if (params.id !== undefined && contactsContext) {
            const contact = contactsContext.contacts[params.id];
            if (contact === undefined) {
                history.push('/');
            } else {
                setName(contact.name);
                setBirthdate(contact.birthdate);
                setEmail(contact.email);
                setAddressNumber(contact.address.number);
                setStreet(contact.address.street);
                setCity(contact.address.city);
                setState(contact.address.state);
                setZipCode(contact.address.zipCode);
                if (contact.address.complement) {
                    setComplement(contact.address.complement);
                }
            }
        }
    }, [params.id]);

    function cancel() {
        clearStates();
        history.push('/');
    }

    function saveContact() {
        const newContact: ContactInterface = {
            name,
            email,
            birthdate,
            address: {
                zipCode,
                street,
                number: addressNumber,
                complement,
                city,
                state,
            },
        };

        const error = checkContactDataError(newContact);

        if (contactsContext && !error) {
            const newContactsList = [...contactsContext.contacts];
            if (params.id !== undefined) {
                newContactsList[params.id] = newContact;
            } else {
                newContactsList.push(newContact);
            }
            newContactsList.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
            contactsContext.setContacts(newContactsList);
            history.push('/');
        } else {
            alert(error);
        }
    }

    function clearStates() {
        setName('');
        setBirthdate('');
        setEmail('');
        setAddressNumber('');
        setStreet('');
        setCity('');
        setState('');
        setZipCode('');
        setComplement('');
    }

    function getAddress(cep: string) {
        axios.get(`http://viacep.com.br/ws/${cep}/json/`).then((res) => {
            const { uf, localidade, logradouro, complemento } = res.data as ViacepInterface;
            setState(uf);
            setCity(localidade);
            setStreet(logradouro);
            setComplement(complemento);
        });
    }

    return (
        <Container>
            <div>
                <Set>
                    <IoPersonSharp style={{ fontSize: 30, color: '#FFA000', marginRight: 10 }} />
                    <TextField placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Set>
                <Set>
                    <IoMailSharp style={{ fontSize: 30, color: '#FFA000', marginRight: 10 }} />
                    <TextField placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Set>
                <Set>
                    <IoBalloonSharp style={{ fontSize: 30, color: '#FFA000', marginRight: 10 }} />
                    <TextField
                        placeholder="Birthdate"
                        value={birthdate}
                        onChange={(e) => setBirthdate(e.target.value)}
                    />
                </Set>
                <AddressSet>
                    <div className="icon">
                        <IoLocationSharp style={{ fontSize: 30, color: '#FFA000', marginRight: 10 }} />
                    </div>
                    <div>
                        <TextField
                            placeholder="Zip code"
                            value={zipCode}
                            onChange={(e) => {
                                if (e.target.value.length <= 8) setZipCode(e.target.value);
                                if (e.target.value.length === 8) getAddress(e.target.value);
                            }}
                        />
                        <TextField placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                        <TextField placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                        <TextField placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
                        <TextField
                            placeholder="Address number"
                            value={addressNumber}
                            onChange={(e) => setAddressNumber(e.target.value)}
                        />
                        <TextField
                            placeholder="Complement"
                            value={complement}
                            onChange={(e) => setComplement(e.target.value)}
                        />
                    </div>
                </AddressSet>
            </div>
            <ButtonContainer>
                <button className="cancel" onClick={cancel}>
                    <IoBackspaceOutline />
                </button>
                <button className="save" onClick={saveContact}>
                    <IoCheckboxOutline />
                </button>
            </ButtonContainer>
        </Container>
    );
};

export default Enrollment;

const TextField = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    button {
        color: white;
        font-size: 30px;
        height: 50px;
        width: 40%;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
    .cancel {
        background-color: red;
    }
    .save {
        background-color: green;
    }
`;

const Set = styled.div`
    display: flex;
    align-items: center;
`;

const AddressSet = styled.div`
    display: flex;
    .icon {
        margin-top: 10px;
    }
`;
