import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

const DOMAIN ="http://localhost:5050"; // Access REACT_APP_SERVER_DOMAIN from .env file
axios.defaults.baseURL = DOMAIN;

/** Make API requests */


/** To get email from Token */
export async function getEmail(){
    const token = localStorage.getItem('token');
    if(!token) return Promise.reject(" Cannot find Token ");
    
    let decode = jwtDecode(token);
    return decode;
}

/** Authenticate function */
export async function authenticate(email){
    try {
        return await axios.post('/api/authenticate', { email });
    } catch (error) {
        return { error: "Email doesn't exist" };
    }
}

/** Get User details */
export async function getUser({ email }){
    try {
        const { data } = await axios.get(`/api/user/${email}`);
        return data;
    } catch (error) {
        return { error : "Password doesn';'t match" }
    }
}

/** Register user function */
export async function registerUser(credentials){
    try {
        const { data : { msg } } = await axios.post(`/api/register`, credentials);

        /** Email ek send wenna haduwt psse danna */
        // const { data : { msg }, status } = await axios.post(`/api/register`, credentials);

        // let { email } = credentials;

        /** Send Email */
        // if(status === 201){
        //      await axios.post('/api/registerMail', { userEmail : email, text : msg })
        //  }

        return Promise.resolve(msg);

    } catch (error) {
        return Promise.reject(error);
    }
}

/** Login function */
export async function verifyPassword({ email, password }){
    try {
        if (email) {
            const { data } = await axios.post('/api/login', { email, password });
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Password doesn't match"});
    }
}

/** Update user profile function */
export async function updateUser(req){
    try {
        const token = await localStorage.getItem('token');
        const userID = await localStorage.getItem('id');
        console.log(token);
        const data = await axios.put('/api/updateUser', req, { headers : { "Authorization" : `Bearer ${token}`, "id" : userID } });

        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject({ error : "Couldn't update profile" });   
    }
}

/** Delete user function */
export async function deleteUser(){
    try {
        const token = await localStorage.getItem('token');
        const userID = await localStorage.getItem('id');
        const { data, status } = await axios.delete('/api/deleteUser', { headers : { "Authorization" : `Bearer ${token}`, "id" : userID } });
        return Promise.resolve({ data, status });
    } catch (error) {
        return Promise.reject({ error : "Couldn't delete profile" });
    }
}

/** Generate OTP */
export async function generateOTP(email){
    try {
        const { data : { code }, status } = await axios.get('/api/generateOTP', { params : { email }});

        //send mail with the OTP
        if(status === 201){
            let { data : email } = await getUser({ email });
            let text = `Your Password recovery OTP is ${code}. Verify and recover your password.`;
            await axios.post('/api/registerMail', { email, userEmail : email, text, subject: "Password recovery OTP" })
        }
        return Promise.resolve({ code });
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** Verify OTP */
export async function verifyOTP({ email, code}){
    try {
        const { data, status } = await axios.get('/api/verifyOTP', { params : { email, code} });
        return { data, status };
    } catch (error) {
        return Promise.reject(error);
    }
}

/** Reset Password */
export async function resetPassword({ email, password }){
    try {
        const { data, status } = await axios.put('/api/resetPassword', { email, password });
        return Promise.resolve({ data, status });
    } catch (error) {
        return Promise.reject({ error });
    }
}