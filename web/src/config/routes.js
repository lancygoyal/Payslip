import React from 'react';
import { Switch } from 'react-router-dom';
import EnRoute from '../components/EnRoute';
import Main from '../containers/Main';
import NotFoundPage from '../containers/NotFoundPage';
import { auth } from '../utilities/redux';

const PublicLayout = ({ component: Component }) => (
  <div className="Default">
    <Component />
  </div>
);

export default store => {
  return (
    <Switch>
      <EnRoute
        exact
        path="/"
        component={Main}
        layout={PublicLayout}
        type="public"
        auhtHandler={auth}
        store={store}
      />
      <EnRoute component={NotFoundPage} type="public" layout={PublicLayout} />
    </Switch>
  );
};
