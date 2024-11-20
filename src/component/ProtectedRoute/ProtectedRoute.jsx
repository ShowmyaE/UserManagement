
import {Navigate} from 'react-router-dom'
const ProtectedRoute = ({ element: Element, ...props }) =>{
    const jwtToken=localStorage.getItem('token')
    if(jwtToken===undefined){
        return <Navigate to="/login" /> 
    }
    else{
        return <Element {...props}/>
    }
}
export default ProtectedRoute