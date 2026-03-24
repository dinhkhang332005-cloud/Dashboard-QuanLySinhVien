import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";


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

