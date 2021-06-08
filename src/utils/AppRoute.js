import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {

  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/"
          {...rest}
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )} />
        <Route exact path="/mail" component={() => { 
          window.location.href = "mailto:fukatechnologies@gmail.com"; 
          return null; 
        }} />
        <Route exact path="/web" component={() => { 
          window.location.href = 'https://fukatechnologies.github.io/official/'; 
          return null; 
        }} />
        <Route exact path="/sign-in" component={() => { 
          window.location.href = 'https://fuka-tech.web.app/'; 
          return null; 
        }} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;