import { Outlet } from "react-router-dom"
import Sidebar from "@/components/Sidebar";
function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-10 w-full order-1 lg:order-2">
        <Outlet />
      </div>
    </div >
  )
}

export default App
