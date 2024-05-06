import React from 'react';
// Layout Types
import { DefaultLayout } from '../components/Layout';

// Route Views
import NotFound from '../components/NotFound/NotFound';

const NotFoundRoute = [
  {
    path: '*',
    exact: true,
    layout: DefaultLayout,
    component: <NotFound />
  }
];
export default NotFoundRoute;
