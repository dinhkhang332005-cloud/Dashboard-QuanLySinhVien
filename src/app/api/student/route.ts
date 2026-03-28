import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { SortDescIcon } from "lucide-react";

export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url)
    const page = Number(searchParams.get('page')||1);
    const limit = Number(searchParams.get("limit")||10);
    const search = searchParams.get("search")||"";
    const sort = searchParams.get("sort")||"id-desc";
    const [sortColumn,sortDirection] = sort.split("-");
    const skip = (page-1)*limit;

    try{
        const[students,totalStudents] = await Promise.all([
            prisma.student.findMany({
                where:{
                    name:{
                        contains:search,
                    }
                },
                skip:skip,
                take:limit,
                orderBy:{
                    [sortColumn]:sortDirection
                }
            }),
            prisma.student.count({
                where: {
                name: {
                contains: search,
                },
                        },
            }),
        ]);
        const totalPage = Math.ceil(totalStudents/limit)
        return NextResponse.json({
            data:students,
            meta :{
                totalStudents,
                totalPage,
                currentPage: page,
                limit,
            }
        })
    }catch(err){
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

 export async function POST(req:NextRequest) {
    try{
        const body =  await req.json();
        console.log(body)
        const student = await prisma.student.create({
            data:{
                studentID:body.studentID,
                name:body.name,
                email:body.email,
                photo:body.photo,
                phone:body.phone,
                grade:body.grade,
                class:body.class,
                address:body.address
            }
        })
        return NextResponse.json({Message:"Tao moi thanh cong ",data:student},{status:200})
    }catch(err){
        console.log('Loi',err)
        return NextResponse.json({Message:'That bai'},{status:400})
    }
 }