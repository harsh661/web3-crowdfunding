import "./styles/globals.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import { Home } from "./pages"
import { Sidebar } from "./components"

const Layout = () => {
  return (
    <div className="relative min-h-screen flex">
      <div className="border-r border-gray-border">
        <Sidebar />
      </div>
      <div className="flex-1 p-5">
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
      }
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
