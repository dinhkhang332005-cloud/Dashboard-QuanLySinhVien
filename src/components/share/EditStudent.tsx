
import { StudentData } from "@/serviecs/studentApi";
import { StudentForm } from "../forms/StudentForm";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

type StudentEditProps = {
    isOpen : boolean;
    onOpenChange : (open:boolean)=>void;
    student:StudentData|null;
    onUpdate:(data:StudentData)=>void
}

export const EditingStudent = ({isOpen,onOpenChange,student,onUpdate}:StudentEditProps)=>{
    return(
        <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetContent side='right' className='w-[400px] sm:w-[540px] overflow-y-auto'>
        <SheetHeader className='mb-6'>
          <SheetTitle className='text-2xl font-bold'>Sửa thông tin Học Sinh</SheetTitle>
        </SheetHeader>
        <StudentForm onSubmit={onUpdate} defaultData={student}/>
        </SheetContent>
       </Sheet>
    )
}
