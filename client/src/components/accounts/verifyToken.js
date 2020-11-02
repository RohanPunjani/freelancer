import {Redirect} from 'react-router-dom'
const jwt = require('jsonwebtoken')

const verify = () => {
    const token = sessionStorage.getItem('token')
    if(!token)
    {
        Redirect('/')
    }
    try{
        return jwt.verify(token, process.env.TOKEN_SECRET);
    }
    catch(err){
        return null;
        // Redirect('/');
    }
}
export default verify