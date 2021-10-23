import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import ContactsContext from './contexts/ContactsContext';

import Navbar from './components/Navbar';
import Contacts from './pages/Contacts';
import Enrollment from './pages/Enrollment/index';

const App: React.FC = () => {
    const [contacts, setContacts] = useState(fakeContacts);

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <ContactsContext.Provider value={{ contacts, setContacts }}>
                    <Navbar />
                    <Route exact path="/">
                        <Contacts />
                    </Route>
                    <Route path="/enrollment/:id?">
                        <Enrollment />
                    </Route>
                </ContactsContext.Provider>
            </Switch>
        </Router>
    );
};

export default App;

const fakeContacts = [
    {
        name: 'Camila dos Santos Freire',
        email: 'camila.sf@gmail.com',
        birthdate: '23/07/1998',
        address: {
            zipCode: '41254110',
            street: 'Avenida Professor Pinto de Aguiar',
            number: '123',
            complement: '',
            city: 'Salvador',
            state: 'Bahia',
        },
    },
    {
        name: 'João da Silva Junior',
        email: 'joao.silva@gmail.com',
        birthdate: '26/03/1991',
        address: {
            zipCode: '41705120',
            street: '1ª Avenida Professor Pinto de Aguiar',
            number: '4',
            complement: 'Ao lado do restaurante',
            city: 'Salvador',
            state: 'Bahia',
        },
    },
];
