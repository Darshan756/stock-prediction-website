import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_BASE_API

const axiosInstance = axios.create({
  baseURL:baseURL,
  headers:{
    "Content-Type":'application/json'
  }
})


axiosInstance.interceptors.request.use(
    function(config){
        console.log('request before>',config)
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

//Response Interceptor
axiosInstance.interceptors.response.use(

    function(response){
        return response;
    },
    //Handle failed response
  async  function(error){
        const origionalRequest = error.config;
        if(error.response.status === 401 && !origionalRequest.retry){
            origionalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try {
                const response =await axiosInstance.post('/token/refresh/',{refresh:refreshToken})
                localStorage.setItem('accessToken',response.data.access)
                origionalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(origionalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
            }
        }
        return Promise.reject(error);
    }


)

export default axiosInstance