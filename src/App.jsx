import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home, { loader as usersLoader} from './pages/Home'
import RootLayout from './pages/RootLayout'
import Explore from './pages/Explore'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: usersLoader,
      },
      {
        path: 'explore',
        element: <Explore />,
      }
    ]
  }
])

function App() {

  return <RouterProvider router={router} />
}

export default App
