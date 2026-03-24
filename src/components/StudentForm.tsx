import { StudentData } from "@/serviecs/studentApi";
import { useForm } from "react-hook-form";

export const StudentForm = ({onSubmit,defaultData}:{onSubmit:any,defaultData?:any})=>{
  const {register,handleSubmit,reset}=useForm<StudentData>({
    defaultValues:defaultData
  })
  return (
    <form onSubmit={handleSubmit((data)=>{
      onSubmit(data);
      reset();
    })} className='flex flex-col gap-4'>
        <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Mã SV</label>
          <input {...register("studentID")} className="border p-2 rounded-md" placeholder="Mời nhập mã sinh viên" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Email</label>
          <input type="email" {...register("email")} className="border p-2 rounded-md" placeholder="VD: hocsinh@gmail.com" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Họ và tên</label>
          <input {...register("name")} className="border p-2 rounded-md" placeholder="Vui lòng nhập họ và tên" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Lớp</label>
          <input {...register("class")} className="border p-2 rounded-md" placeholder="Vui lòng nhập lớp" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Số điện thoại</label>
          <input {...register("phone")} className="border p-2 rounded-md" placeholder="090..." />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Khối</label>
          <input type="number" {...register("grade", { valueAsNumber: true })} className="border p-2 rounded-md" placeholder="Vui lòng nhập khối" />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Địa chỉ</label>
          <input {...register("address")} className="border p-2 rounded-md" placeholder="Vui lòng nhập địa chỉ" />
         </div>
         </div>
      <button type="submit" className="bg-amber-400 text-white font-semibold p-3 rounded-xl mt-4 hover:bg-amber-500">
        Lưu thông tin
      </button>
         
    </form>
  )
}