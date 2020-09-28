// Core
import React from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

// Styles
import './base/reset.scss';

// Other
import { client } from './init/client';

// Routes
import { history } from './navigation/history';
import { Routes } from './navigation';

// Icons
import { initializeIcons } from 'office-ui-fabric-react';

initializeIcons();

export const App = () => (
    <ApolloProvider client={client}>
        <Router history={ history }>
            <Routes />
        </Router>
    </ApolloProvider>
);
