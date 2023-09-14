import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '5f533a9f044d4de786fe11700b0f70be'
    }
})