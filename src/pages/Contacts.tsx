import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import ContactsContext from '../contexts/ContactsContext';

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
                        <div>Name: {contact.name}</div>
                        <div>Birthdate: {contact.birthDate}</div>
                        <div>E-mail: {contact.email}</div>
                        <div>{`Address: ${contact.address.number}, ${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.zipCode}`}</div>
                    </Card>
                ))}
            </Container>
            <Button onClick={newContactPage}>+</Button>
        </>
    );
};

export default Contacts;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`;

const Card = styled.div`
    width: 90%;
    background-color: white;
    border-bottom: 5px solid #ffa000;
    margin-bottom: 10px;
    padding: 10px;
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
