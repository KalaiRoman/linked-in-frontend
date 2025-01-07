import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter=()=>{
  return false?<Outlet/>:<Navigate to="/"/>;
}
export default ProtectedRouter;