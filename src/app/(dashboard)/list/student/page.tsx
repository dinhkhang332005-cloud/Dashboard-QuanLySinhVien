'use client'
import ListBottom from '@/app/component/ListBottom'
import Search from '@/app/component/Search'
import Table from '@/app/component/Table'
import { StudentForm } from '@/components/StudentForm'
// import { CommonModal } from '@/components/ui/Modal'
import { role, studentsData} from '@/lib/data'
import { studentApi, StudentData } from '@/serviecs/studentApi'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from 'react-icons/md'
// Nhập các component của shadcn ở đầu trang
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { toast } from 'sonner'
import { StudentDetailSheet } from '@/components/share/Student'
import { EditingStudent } from '@/components/share/EditStudent'


type Student ={
  id:number,
  studentID:string,
  name:string,
  email:string,
  photo?:string,
  phone?:string,
  grade:number,
  class:string,
  address?:string,
}

const columns = [
  {
    header:"Info",
    accessor:"info"
  },
  {
    header:"Student ID",
    accessor:"studentID",
    className:"hidden md:table-cell"
  },
  {
    header:"Grade",
    accessor:"grade",
    className:"hidden md:table-cell"
  },
  {
    header:"Phone",
    accessor:"phone",
    className:"hidden lg:table-cell"
  },
  {
    header:"Address",
    accessor:"address",
    className:"hidden lg:table-cell"
  },
  {
    header:"Action",
    accessor:"action"
  },
]

const StudentListPage = () => {
  const [listStudent,setListStudent] = useState<Student[]>(studentsData)
  const [isOpen,setIsOpen] = useState(false)

  // useState view ho so
  const [isViewOpen,setIsViewOpen] = useState(false)
  const [selectStudent,setSelectStudent] = useState<StudentData|null>(null)

//useState chinh sua
  const [editIsOpen,setEditIsOpen] = useState(false);
  const [editingStudent,setEditingStudent] = useState<StudentData|null>(null)

// Pagination
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPage,setTotalPage] = useState(1);
  const limit = 10;

  const [firstSearch,setFirstSearch] = useState("")


  useEffect(()=>{
    const axiosGetStudent = async ()=>{
      try{
        const response = await studentApi.getStudentPage(currentPage,limit,firstSearch);
        const {data,meta} = response 
        setListStudent(data||[]);
        setTotalPage(meta?.totalPage || 1)
      }catch(err){
          console.error("loi",err);
          toast.error('Không thể tải danh sách học sinh')
      }
    }
    axiosGetStudent();
  },[currentPage,firstSearch])



  const handelEditClick = ((student:StudentData)=>{
    setEditingStudent(student);
    setEditIsOpen(true);
  })
   const handelUpdate = async (data:StudentData)=>{
    if(!editingStudent) return;
    try{
      const respone = await studentApi.putStudent(editingStudent.id!,data);
      const updateList = listStudent.map((item)=>
        item.id===editingStudent.id?respone.data:item
      )
      setListStudent(updateList)
      setEditIsOpen(false)
      toast.success("Thay doi thanh cong")
    }catch(err){
    console.log("Loi cap nhat :",err)
    toast.error("That bai")
    }
   }
  const handleDelete = async (id:number)=>{
    try{
      await studentApi.deleteStudent(id);
      setListStudent(listStudent.filter((student)=>{return student.id!==id}))
      toast.success("Xóa thành công")
    }catch(err){
      toast.error("xóa thất bại")
    }
    
  }

  const handleCreat = async (data:StudentData)=>{
    try{
    const response = await studentApi.postStudent(data);
    const newStudentFromData = response.data
    setListStudent([newStudentFromData,...listStudent])
    setIsOpen(false)
    toast.success("Thêm sinh viên thành công")
    }catch(err){
        toast.error("Thêm mới thất bại");
    }
  }  

  const handleGetStudent = async(id:number)=>{
    try{
      const response = await studentApi.getStudent(id);
      setSelectStudent(response.data)
      setIsViewOpen(true);
    }catch(err){
      console.log("Lỗi",err)
      toast.error("Không thể tải thông tin")
    }
  }

const renderRow = (item:Student)=>(
  <tr key={item.id} className='border-b border-gray-300 even:bg-state-50 text-sm hover:bg-purple-50'>
    <td className='flex items-center gap-4 p-4'>
      <Image src={item.photo|| "/avatar.webp"} alt='' width={40} height={40} className='md:hidden xl:block h-10 rounded-full object-cover'/>
      <div className='flex flex-col'>
        <h3 className='font-semibold'>{item.name}</h3>
        <h4 className='text-xs text-gray-500'>{item?.class}</h4>
      </div>
    </td>
    <td className='md:table-cell'>{item.studentID}</td>
    <td className='md:table-cell'>{item.grade}</td>
    <td className='md:table-cell'>{item.phone}</td>
    <td className='md:table-cell'>{item.address}</td>
    <td>
      <div className='flex justify-between items-center '>
        <Link href={`/list/student/${item.id}`}/>
        <button onClick={()=>handleGetStudent(item.id)}>
        <FaEye className='text-[24px] text-blue-300' />
        </button>
        <button onClick={()=>handelEditClick(item)}>
          <FaPencil className='text-[24px] text-red-300'/>
        </button>
        {role==="admin" &&(
          <button onClick={()=>handleDelete(item.id)}>
        <MdDelete className='text-[24px] text-yellow-300' />
        </button>
        )}
      </div>
    </td>
  </tr>
)

  return (
    <div className=' bg-white h-screen m-4 p-4'>
      {/* top */}
      <div className='flex  justify-between'>
        <h1 className='font-semibold text-xl hidden md:block '>All Students</h1>
        <div className='flex flex-col w-full items-center gap-4 md:flex-row md:w-auto'>
          <Search onSearch={(value)=>setFirstSearch(value)}/>
          <div className='flex items-center gap-4'>
            <div className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer bg-amber-300 p-2'>
                        <Image src="/filter.webp" alt='' width={20} height={20}  />
            </div>
            <div className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer  bg-amber-300 p-2'>
                        <Image src="/sort.webp" alt='' width={20} height={20}  />
            </div>
            <div className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer  bg-amber-300 p-2 ' onClick={()=>setIsOpen(true)}>
                        <Image src="/create.webp" alt='' width={20} height={20}  />
            </div>
          </div>
        </div>
      </div>
      {/* list */}
      <div>
      <Table columns={columns} renderRow={renderRow} data={listStudent}/>
      </div>
      {/* bottom */}
      <div>
        <ListBottom
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={(page)=>setCurrentPage(page)}
        />
      </div>
      {/* <CommonModal
        isOpen={isOpen}
        onClose={()=>setIsOpen(false)}
        title="Thêm học sinh mới"
      >
        <StudentForm  onSubmit={handleCreat}/>
       </CommonModal> */}
       <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side='right' className='w-[400px] sm:w-[540px] overflow-y-auto'>
        <SheetHeader className='mb-6'>
          <SheetTitle className='text-2xl font-bold'>Thêm học sinh mới</SheetTitle>
        </SheetHeader>
        <StudentForm onSubmit={handleCreat} />
        </SheetContent>
       </Sheet>

       <StudentDetailSheet 
      isOpen={isViewOpen} 
      onOpenChange={setIsViewOpen} 
      student={selectStudent} 
      />

      <EditingStudent
      isOpen={editIsOpen}
      onOpenChange={setEditIsOpen}
      onUpdate={handelUpdate}
      student={editingStudent}
      />
    </div>

  )
}

export default StudentListPage