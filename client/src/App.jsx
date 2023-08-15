import "./styles/globals.css"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import { Home, Profile, Create, CampaignPage } from "./pages"
import { Navbar, Sidebar } from "./components"

const Layout = () => {
  return (
    <div className="relative min-h-screen flex">
      <div className="border-r border-gray-border hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1 h-[100dvh] overflow-scroll">
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
      },
      {
        path: "/create",
        element: <Create />
      },
      {
        path: "/campaign/:title",
        element: <CampaignPage />
      }
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
