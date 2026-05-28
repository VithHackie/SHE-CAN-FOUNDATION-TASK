import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom";

const PublicRoute = ({children})=>{
    const { users, isAdmin, loading } = useContext(AuthContext);
    
    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <p className="text-lg">Loading...</p>
        </div>
    }
    
    if (users && isAdmin) {
        return <Navigate to={"/admin"} replace />
    }
    
    return(
        <div>
            {children}
        </div>
    )
}
export default PublicRoute