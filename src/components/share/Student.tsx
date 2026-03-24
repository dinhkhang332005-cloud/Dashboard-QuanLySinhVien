import { StudentData } from "@/serviecs/studentApi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

type StudentSheetProps = {
    isOpen : boolean;
    onOpenChange : (open:boolean)=>void;
    student:StudentData|null;
}

export const StudentDetailSheet = ({isOpen,onOpenChange,student}:StudentSheetProps)=>{
    return(
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="w-[400px] sm:-[580px] overflow-y-auto">
                <SheetHeader className="mb-6 border-b pb-4">
                    <SheetTitle className="text-2xl font-bold text-blue-600">Hồ sơ sinh viên</SheetTitle>
                </SheetHeader>
                {student ? (
          <div className="flex flex-col gap-6 text-gray-700 mt-4">
            {/* Vùng Ảnh Đại Diện */}
            <div className="flex justify-center">
              <img 
                src={student.photo || "/avatar.webp"} 
                alt="Avatar" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 shadow-md"
              />
            </div>

            {/* Vùng Thông Tin Chi Tiết */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl border">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400">Mã Sinh Viên</span>
                <span className="font-semibold">{student.studentID}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400">Họ và Tên</span>
                <span className="font-semibold">{student.name}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400">Email</span>
                <span className="font-semibold truncate" title={student.email}>{student.email}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400">Số điện thoại</span>
                <span className="font-semibold">{student.phone || 'Chưa cập nhật'}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400">Khối / Lớp</span>
                <span className="font-semibold">{student.grade} - {student.class}</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 bg-gray-50 p-4 rounded-xl border">
              <span className="text-sm text-gray-400">Địa chỉ thường trú</span>
              <span className="font-semibold">{student.address || 'Chưa cập nhật'}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-40 text-gray-500">
            Đang tải dữ liệu...
          </div>
        )}
            </SheetContent>
        </Sheet>
    )
}