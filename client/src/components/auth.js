import axios from "axios"

const Auth = {
    async getAuth() {
        async function getValue () {
            try {
                const userAuth = await axios.get("/user")

                if (userAuth.data==="no user logged in") {
                    return false
                }
                else {
                    return true
                }
            }
            catch (error) {
                console.log(error)
            }
        }
        const isAuth = await getValue()
        return isAuth
    }
};
export default Auth;