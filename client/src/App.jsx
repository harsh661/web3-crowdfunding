import "./styles/globals.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import { Home, Profile } from "./pages"
import { Navbar, Sidebar } from "./components"

const Layout = () => {
  return (
    <div className="relative min-h-screen flex">
      <div className="border-r border-gray-border">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
