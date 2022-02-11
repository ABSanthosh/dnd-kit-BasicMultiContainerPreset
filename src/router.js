import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as views from "./views"
import React from 'react'

export default function Router() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/"  component={views.Home} />
      </Switch>
    </BrowserRouter>
    )
}
