import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";



// export async function GET(){
//     try{
//     const students = await prisma.student.findMany()
//     return NextResponse.json({Message:'Danh sach sinh vien ', data:students},{status:201})
//     }catch(err){
//         console.log("Loi:",err)
//         return NextResponse.json({Message:'Lay danh sach su=inh vien that bai'},{status:400})
//     }
// }

//  export async function POST(req:NextRequest) {
//     try{
//         const body =  await req.json();
//         const Student = await prisma.student.create({
//             data:{
//                 studentID:body.studentID,
//                 name:body.name,
//                 email:body.email,
//                 photo:body.photo,
//                 phone:body.phone,
//                 grade:body.grade,
//                 class:body.class,
//                 address:body.address
//             }
//         })
//         return NextResponse.json({Message:"Tao moi thanh cong ",data:Student},{status:200})
//     }catch(err){
//         console.log('Loi',err)
//         return NextResponse.json({Message:'That bai'},{status:400})
//     }
//  }

//  export async function GET() {
//     try{
//         const teachers = await prisma.teacher.
//     }catch(err){

//     }
//  }

export async function POST(req:NextRequest) {
    try{
        const body = await req.json();
        const newTeacher = await prisma.teacher.create({
            data:{
                teacherID:body.teacherID,
                name:body.name,
                email:body.email,
                photo:body.photo,
                phone:body.phone,
                address:body.address,
                subjects:{
                connectOrCreate  :body.subjects.map((subName:string)=>({
                    where :{name :subName},
                    create :{name :subName}
                }))
                },
                classes:{
                    connectOrCreate : body.classes.map((className:string)=>({
                        where :{name : className},
                        create :{name :className}
                    }))
                }
            }
        })
        return NextResponse.json({Message:'Thanh Cong',data:newTeacher},{status:201})
    }catch(err){
        console.log("Loi",err)
        return NextResponse.json({Message:'That bai'},{status:400})
    }
}

export async function GET() {
    try{
        const teachers = await prisma.teacher.findMany()
        return NextResponse.json({Message:'Danh sach giao vien la ', data:teachers},{status:201})
    }catch(err){
        console.log("loi",err)
        return NextResponse.json({Message:'That bai'},{status:201})
    }
}
 