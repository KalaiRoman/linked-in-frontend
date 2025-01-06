import { Navigate, Outlet } from "react-router-dom"

const ProtectedRouter=()=>{
  return false?<Outlet/>:<Navigate to="/login"/>;
}
export default ProtectedRouter;