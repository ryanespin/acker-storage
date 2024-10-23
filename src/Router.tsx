import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { MyInventory } from './pages/MyInventory/MyInventory.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MyInventory />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
