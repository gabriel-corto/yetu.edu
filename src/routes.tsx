import { createBrowserRouter } from "react-router-dom"
import { Landing } from "./pages/landing"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
])
