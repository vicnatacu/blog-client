import api from "../config/api"

export async function registerUser(userInfo) {
    // call to server to register user
    try {
        const response = await api.post("/auth/register", userInfo)
        console.log("got user back from server", response)
        return response.data
    }
    catch (error) { 
        console.log("got error", error)
        throw(error)
    }
}

export async function loginUser(userInfo) {
    // call to server to login user
    // return user info if successful and error if not
    try {
        const response = await api.post("/auth/login", userInfo)
        console.log("got user back from server", response) 
        return response.data
    }
    catch(error){
        console.log("got error", error)
        throw(error)
    }
}

export async function logoutUser() {
    // call to server to logout user
    try {
        return api.get("/auth/logout")
    }
    catch (error) {
        console.log("an error occurred logging out", error)
        throw(error)
    }
}

export async function userAuthenticated() {
    try {
        const response =  await api.get("/auth/user")
        return response
    }
    catch(error) {
        console.log("an error occurred checking for authenticated user")
        return {error: error, status: error.response.status}
    }
}