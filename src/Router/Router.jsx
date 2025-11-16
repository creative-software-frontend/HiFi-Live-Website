import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import Business from '../Pages/Business/Business';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Policy from '../Pages/Policy/Policy';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/business',
        Component: Business,
      },
      {
        path: '/contact',
        Component: ContactUs,
      },
      {
        path: '/policy',
        Component: Policy,
      },
    ],
  },
]);
