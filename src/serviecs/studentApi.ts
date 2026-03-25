import {axiosClient} from "@/lib/axios"

export type StudentData = {
  id?:number;
  studentID :string ;
  name :string ;
  email : string ;
  photo? : string;
  phone? : string;
  grade :number;
  class : string;
  address? :string
}
export const studentApi = {
    deleteStudent: async (id:number)=>{
        return await axiosClient.delete(`/api/student/${id}`)
    },
    getStudent: async(id:number)=>{
        return await axiosClient.get(`/api/student/${id}`)
    },
    postStudent:async (data:StudentData)=>{
        return await axiosClient.post(`/api/student`,data)
    },
    putStudent:async(id:number,data:StudentData)=>{
        return await axiosClient.put(`/api/student/${id}`,data)
    },
    patchStudent: async(id:number,data:Partial<StudentData>)=>{
        return await axiosClient.patch(`/api/student/${id}`,data)
    },
    getStudentPage: async (page:number,limit:number,search:string)=>{
        return axiosClient.get(`/api/student?page=${page}&limit=${limit}&search=${search}`)
    }
}