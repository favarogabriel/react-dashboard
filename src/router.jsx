import { createBrowserRouter } from "react-router-dom";
import Layout from '/src/pages/Layout'
import Dashboard from "/src/pages/Dashboard";
import Itens from '/src/pages/Itens';
import Item from '/src/pages/Item';
import NewItem from "/src/pages/NewItem";
import EditItem from "/src/pages/EditItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'itens',
                element: <Itens />
            },
            {
                path: 'itens/:item',
                element: <Item />
            },
            {
                path: 'itens/new-item',
                element: <NewItem />
            },
            {
                path: '/itens/:item/edit',
                element: <EditItem />
            }
        ]
    }
])

export default router;