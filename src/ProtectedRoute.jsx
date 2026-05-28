import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children})=>{
    const { users, isAdmin, loading } = useContext(AuthContext)
    
    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <p className="text-lg">Loading...</p>
        </div>
    }
    
    return <div>
        {users && isAdmin ? children : <Navigate to={"/"}/>}
    </div>
}

export default ProtectedRoute;