import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter=()=>{

  const token=JSON.parse(localStorage.getItem("userLinkedIn"));

  return token?<Outlet/>:<Navigate to="/"/>;
}
export default ProtectedRouter;