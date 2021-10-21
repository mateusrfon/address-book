import React, { useState } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import ContactsContext from './contexts/ContactsContext';

import Contacts from './pages/Contacts';
import Enrollment from './pages/Enrollment';

const App: React.FC = () => {
    const [contacts, setContacts] = useState(fakeContacts);

    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <ContactsContext.Provider value={{ contacts, setContacts }}>
                    <Route exact path="/">
                        <Contacts />
                    </Route>
                    <Route exact path="/enrollment">
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
        name: 'João Silva',
        email: 'joao.silva@gmail.com',
        birthDate: '26/03/1991',
        address: {
            zipCode: '41705-120',
            street: '1ª Avenida Professor Pinto de Aguiar',
            number: '4',
            complement: 'Ao lado do restaurante',
            city: 'Salvador',
            state: 'Bahia',
        },
    },
    {
        name: 'Julia dos Santos Freire',
        email: 'julia.sf@gmail.com',
        birthDate: '23/07/1998',
        address: {
            zipCode: '41254-110',
            street: 'Avenida Professor Pinto de Aguiar',
            number: '123',
            city: 'Salvador',
            state: 'Bahia',
        },
    },
];
