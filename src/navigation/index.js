// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import { Guardian } from '../bus/customer/components/gurdian';

// Routes
import { book } from './book';

// Pages
import { LoginPage } from '../pages/login';
import { SignUpPage } from '../pages/signUp';
import { TasksPage } from '../pages/tasks';

export const Routes = () => (
    <>
        <Switch>
            <Route exact path={book.root}>
                <h1>Root page</h1>
            </Route>
            <Route exact path={book.login}>
                <LoginPage />
            </Route>
            <Route exact path={book.signup}>
                <SignUpPage />
            </Route>
            <Guardian>
                <Route exact path={book.tasks}>
                    <TasksPage />
                </Route>
            </Guardian>
        </Switch>
    </>
)
