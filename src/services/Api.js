import axios from "axios";

const Api = axios.create({
    baseURL: "https://dummyjson.com/users"
})


export default Api;