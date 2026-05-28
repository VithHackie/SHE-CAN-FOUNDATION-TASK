import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./login.jsx"
import AuthContextProvider from './AuthContext.jsx'
import PublicRoute from './PublicRoute.jsx'
import AdminPage from './AdminPage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/login",
    element:<PublicRoute>
              <Login />
            </PublicRoute>
  },
  {
    path:"/admin",
    element : <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  </StrictMode>,
)
