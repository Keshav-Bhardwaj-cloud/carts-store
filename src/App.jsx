import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
      { path: "/product/:id", element: <ProductDetails /> }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />

  )
}

export default App
