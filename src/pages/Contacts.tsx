import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ContactsContext from '../contexts/ContactsContext';
import { IoPersonSharp, IoMailSharp, IoBalloonSharp, IoLocationSharp } from 'react-icons/io5';

import Container from '../styles/Container';

const Contacts: React.FC = () => {
    const history = useHistory();
    const contactsContext = useContext(ContactsContext);

    function newContactPage() {
        history.push('/enrollment');
    }

    function editContactPage(id: number) {
        history.push(`/enrollment/${id}`);
    }

    return (
        <>
            <Container>
                {contactsContext?.contacts.map((contact, index) => (
                    <Card key={index} onClick={() => editContactPage(index)}>
                        <div>
                            <IoPersonSharp style={{ fontSize: 20, color: '#FFA000', marginRight: 5 }} />
                            <span>{contact.name}</span>
                        </div>
                        <div>
                            <IoBalloonSharp style={{ fontSize: 20, color: '#FFA000', marginRight: 5 }} />{' '}
                            <span>{contact.birthdate}</span>
                        </div>

                        <div>
                            <IoMailSharp style={{ fontSize: 20, color: '#FFA000', marginRight: 5 }} />
                            <span>{contact.email}</span>
                        </div>

                        <div>
                            <IoLocationSharp style={{ fontSize: 30, color: '#FFA000', marginRight: 5 }} />
                            <span>{`${contact.address.street}, ${contact.address.number}, ${contact.address.city}, ${
                                contact.address.state
                            } ${contact.address.zipCode}${
                                contact.address.complement ? `, ${contact.address.complement}` : ''
                            }`}</span>
                        </div>
                    </Card>
                ))}
            </Container>
            <Button onClick={newContactPage}>+</Button>
        </>
    );
};

export default Contacts;

const Card = styled.div`
    width: 100%;
    background-color: white;
    border-bottom: 5px solid #ffd149;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    div {
        display: flex;
        align-items: center;
    }
`;

const Button = styled.button`
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #c67100;
    height: 56px;
    width: 56px;
    border-radius: 50%;
    color: white;
    font-size: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
