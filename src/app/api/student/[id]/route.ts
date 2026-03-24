import { NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

type Props = {
    params : Promise<{id:string}>
}
export async function GET(req:NextRequest,{params}:Props) {
    try{
        const idNumbers = await params
    const idStudent = Number(idNumbers.id)
    const std = await prisma.student.findUnique({
        where :{id:idStudent}
    })
    return NextResponse.json({Message:"Thông tin sinh vien",data:std},{status:201})
    }catch(err){
    console.log('Loi',err)
    return NextResponse.json({Message:'Thất bại'},{status:400})
    }
}   

export async function DELETE(req:NextRequest,{params}:Props) {
    try{
        const idNumbers = await params
        const idStudent = Number(idNumbers.id)
       const deleteStudent = await prisma.student.delete({
            where:{id:idStudent}
        })
        return NextResponse.json({Message:'Xoa thanh cong',data:deleteStudent},{status:200})
    }catch(err){
        console.log('Loi :',err)
        return NextResponse.json({Message:'That bai'},{status:400})
    }
}

export async function PUT(req:NextRequest,{params}:Props) {
    try{
        const idNumbers = await params;
        const idStudent = Number(idNumbers.id)
        const body = await req.json()
        const {studentID,...data} = body
        const putStudent = await prisma.student.update({
            where :{id:idStudent},
            data:data
        })
        return NextResponse.json({Message:'Thay đổi thanhhs công',data:putStudent},{status:200})
    }catch(err){
        console.log("loi",err)
        return NextResponse.json({Message:'that bai'},{status:400})
    }
}

export async function PATCH(req:NextRequest,{params}:Props) {
    try{
    const idNumber = await params
    const idStudent = Number(idNumber.id)
    const body = await req.json()
    const {studentID,...data} = body
    const patchStudent = await prisma.student.update({
        where :{id:idStudent},
        data:data
    })
    return NextResponse.json({Message:"cập nhật thông tin thành công",data:patchStudent},{status:200})
}catch(err){
    console.log("loi",err)
    return NextResponse.json({Message:'that bai'},{status:400})
}
}