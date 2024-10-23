import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MyInventory } from './pages/MyInventory/MyInventory.page';
import { Layout } from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MyInventory />
      }
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
