import axios from "axios";
import { jwtDecode } from "jwt-decode";

const DOMAIN = "http://localhost:5050"; // Access REACT_APP_SERVER_DOMAIN from .env file
axios.defaults.baseURL = DOMAIN;

/** Make API requests */

/** To get email from Token */
export async function getEmail() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject(" Cannot find Token ");

  let decode = jwtDecode(token);
  return decode;
}

/** Authenticate function */
export async function authenticate(email) {
  try {
    return await axios.post("/api/authenticate", { email });
  } catch (error) {
    return { error: "Email doesn't exist" };
  }
}

/** Get User details */
export async function getUser(email) {
  try {
    const { data } = await axios.get(`/api/user/${email}`);
    return data;
  } catch (error) {
    return { error: "Password doesn';'t match" };
  }
}

/** Register user function */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
    } = await axios.post(`/api/register`, credentials);

    /** Email ek send wenna haduwt psse danna */
    let { email } = credentials;

    /** Send Email */
    if (status === 201) {
      await axios.post("/api/registerMail", { userEmail: email, text: msg });
    }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject(error);
  }
}

/** Login function */
export async function verifyPassword({ email, password }) {
  try {
    if (email) {
      const { data } = await axios.post("/api/login", { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't match" });
  }
}

/** Employee Login function */
export async function employeeLogin({ employeeID, email }) {
  try {
    if (employeeID) {
      const { data } = await axios.post("/api/empLogin", { employeeID, email });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "User Authentication error" });
  }
}

/** Update user profile function */
export async function updateUser(req) {
  try {
    const token = await localStorage.getItem("token");
    const userID = await localStorage.getItem("id");
    console.log(token);
    const data = await axios.put("/api/updateUser", req, {
      headers: { Authorization: `Bearer ${token}`, id: userID },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't update profile" });
  }
}

/** Delete user function */
export async function deleteUser() {
  try {
    const token = await localStorage.getItem("token");
    const userID = await localStorage.getItem("id");
    const { data, status } = await axios.delete("/api/deleteUser", {
      headers: { Authorization: `Bearer ${token}`, id: userID },
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error: "Couldn't delete profile" });
  }
}

/** Reset Password */
export async function resetPassword({ email, password, newPassword }) {
  try {
    if (email) {
      
        const { data } = await axios.put("/api/resetPassword", {
          email,
          password,
          newPassword
        });

        return Promise.resolve({ data });
      }
    }
   catch (error) {
    return Promise.reject({ error });
  }
}

/** Send reset email password */
export async function sendResetEmail(email, text, subject) {
    try {
        const { data } = await axios.post("/api/registerMail", { userEmail: email, text, subject });
        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject({ error });
    }
}


/** */
export async function getPassword(email) {
    try {
        const { data } = await axios.post("/api/getpassword", { email });
        return Promise.resolve({ data });
    } catch (error) {
        return Promise.reject({ error });
    }
}
