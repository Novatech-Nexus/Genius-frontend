import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

export const AuthorizeUser = ({ children }) => {
    const token = localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/'} replace={true}></Navigate>
    }

    return children;
}

  AuthorizeUser.propTypes = {
    children: PropTypes.node.isRequired, // Specify 'children' as a required React node
  };