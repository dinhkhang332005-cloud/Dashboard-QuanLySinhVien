import axios from "axios";


 export const axiosClient = axios.create({
    baseURL :process.env.NEXT_PUBLIC_API_URL,
    timeout:10000,
    headers:{
        'Content-Type':'application/json'
    },
})

axiosClient.interceptors.request.use(
    (config)=>{
        const token = typeof window != undefined ?localStorage.getItem('access_token'):null
        if(token){
            config.headers.Authorization=`Bearer ${token}`
        }
        return config
    },
    (error) =>Promise.reject(error)
)

axiosClient.interceptors.response.use(
    (response)=>response.data,
    (error)=>{
        if(error.response){
            const status = error.response.status;
            const data = error.response.data;
            switch(status){
                case 401:
                    console.error("Phiên đăng nhập đã hết hạn")
                    break;
                case 403:
                    alert("Bạn không có quyền thực hiện hành động này")
                    break;
                case 404:
                    console.log("Dữ liệu khồng tồn tại trên hệ thống")
                    break;
                case 500:
                    alert("Lỗi sever")
                    break;
                default:
                    alert(data?.Message||"Có lỗi xảy ra")
            }
        }
        else{
                console.log("error", error)
            }
        return Promise.reject(error)
    }
)

