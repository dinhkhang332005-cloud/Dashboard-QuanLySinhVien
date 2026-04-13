import { studentApi } from "@/serviecs/studentApi";
import { toast } from "sonner";
import * as XLSX from 'xlsx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaFileExport } from "react-icons/fa";


type ExportStudentsProps ={
    currentStudents : any[];
    searchQuery :string;
    sortOption : string;
}

const ExportStudents = ({currentStudents,searchQuery,sortOption}:ExportStudentsProps) => {
    const handleExport = async(type : 'current'|'all')=>{
        try{
            let dataExport = [];
            if (type === 'current'){
                if(currentStudents.length===0){
                    toast.warning("Không có dữ liệu")
                    return;
                }
                dataExport = currentStudents;
                toast.info("Đang chuẩn bị xuất trang hiện tại ")
            }else {
                toast.info(" Đang tải dữ liệu từ sever về ")
                const response = await studentApi.getStudentPage(1,9999,searchQuery,sortOption);
                const {data} = response as any;
                if (!data || data.length===0){
                    toast.warning("Không có dữ liệu")
                    return;
                }
                dataExport = data;
            }
        const exCelRow = dataExport.map((item: any)=>({
            "Mã học sinh " : item.studentID,
            "Tên học sinh " : item.name,
            "Ảnh": item.photo||"",
            "Email" : item.email,
            "Số điện thoại": item.phone || "",
            "Khối": item.grade,
            "Lớp ": item.class,
            "Địa chỉ": item.address|| ""
        }))
            const worksheet = XLSX.utils.json_to_sheet(exCelRow);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook,worksheet,"Danh sách học sinh")

            const dateString = new Date().toDateString().split("T")[0];
            const fileName = type === 'all'
            ?`Toàn bộ học sinh tai${dateString}.xlsx`
            : `Trang hoc sinh hien tai${dateString}.xlsx`
            XLSX.writeFile(workbook,fileName);
            toast.success("Xuất file thành công");
        }catch(err){
            console.log("Lỗi xuất file :",err)
            toast.error("Xuất file thất bại")
        }
    }
  return (
    <DropdownMenu >
        <DropdownMenuTrigger asChild>
            <FaFileExport className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer  bg-amber-300 p-2'/>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-100 shadow-xl rounded-xl p-1 z-[100] font-sans mt-2">
            <DropdownMenuItem onClick={()=>handleExport('current')} className="cursor-pointer  text-xs px-4 py-3 ">
                Xuất trang hiện tại ({currentStudents.length})
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=>handleExport('all')} className="cursor-pointer text-xs px-4 py-3">
                Xuất toàn bộ trang
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ExportStudents
