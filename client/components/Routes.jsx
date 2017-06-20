import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Contact, PageNotFound } from 'Components/Pages'
import { CustomerList, CustomerProfile } from 'Components/Customers'

export default () => <div>
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/contact" component={ Contact } />
        <Route exact path="/customers" component={ CustomerList } />
        <Route path="/customers/:id" component={ CustomerProfile } />
        <Route component={ PageNotFound } />
    </Switch>
</div>