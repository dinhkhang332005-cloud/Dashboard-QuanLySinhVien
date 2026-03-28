import { StudentData } from "@/serviecs/studentApi";
import clsx from "clsx";
import { useForm } from "react-hook-form";

export const StudentForm = ({onSubmit,defaultData}:{onSubmit:any,defaultData?:any})=>{
  const {register,handleSubmit,reset,watch}=useForm<StudentData>({
    defaultValues:defaultData
  })
  const watchGrade = Number(watch("grade"))
  return (
    
    <form onSubmit={handleSubmit((data)=>{
      onSubmit(data);
      reset();
    })} className='flex flex-col gap-4 m-4'>
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Khối</label>
          <select {...register("grade",{valueAsNumber:true}) }  required 
                  className={
                  clsx("border p-2 rounded-md")}>
              <option value="" hidden>Khối</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Email</label>
          <input type="email" {...register("email")} className="border p-2 rounded-md" placeholder="VD: hocsinh@gmail.com" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Lớp</label>
          <select {...register("class") } disabled={!watchGrade}
                  className={
                  clsx("border p-2 rounded-md",
                  !watchGrade
                  ? "bg-gray-100 cursor-not-allowed" : "bg-white cursor-pointer"
            )}>
              <option value="" hidden>{watchGrade?"Chọn Lớp":"Vui lòng nhập khối trước"}</option>
              {
                Number(watchGrade)===10&&(
                  <>
                  <option value="10A1">10A1</option>
                  <option value="10A2">10A2</option>
                  <option value="10A3">10A3</option>
                  <option value="10A4">10A4</option>
                  <option value="10A5">10A5</option>
                  <option value="10A6">10A6</option>
                  <option value="10A7">10A7</option>
                  <option value="10A8">10A8</option>
                  </>
                )
              }
              {
                Number(watchGrade)===11&&(
                  <>
                  <option value="11A1">11A1</option>
                  <option value="11A2">11A2</option>
                  <option value="11A3">11A3</option>
                  <option value="11A4">11A4</option>
                  <option value="11A5">11A5</option>
                  <option value="11A6">11A6</option>
                  <option value="11A7">11A7</option>
                  <option value="11A8">11A8</option>
                  </>
                )
              }
              {
                Number(watchGrade)===12&&(
                  <>
                  <option value="12A1">12A1</option>
                  <option value="12A2">12A2</option>
                  <option value="12A3">12A3</option>
                  <option value="12A4">12A4</option>
                  <option value="12A5">12A5</option>
                  <option value="12A6">12A6</option>
                  <option value="12A7">12A7</option>
                  <option value="12A8">12A8</option>
                  </>
                )
              }
          </select>
        </div>  
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Mã Sinh Viên</label>
          <input {...register("studentID")} className="border p-2 rounded-md" placeholder="Vui lòng nhập mã SV" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Họ và Tên</label>
          <input  {...register("name")} className="border p-2 rounded-md" placeholder="Vui lòng nhập Họ và tên" required />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-bold text-gray-500 mb-1">Số điện thoại</label>
          <input {...register("phone")} className="border p-2 rounded-md" placeholder="090..." />
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