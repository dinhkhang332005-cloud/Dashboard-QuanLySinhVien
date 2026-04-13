import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(req:NextRequest) {
    try{
        const studentData = await req.json();
        const result = await prisma.student.createMany({
            data:studentData,
            skipDuplicates:true,
        });
        return NextResponse.json({
            success: true,
            Message:`Lưu thành công ${result.count} sinh vien`,
            count:result.count
        });
    }catch(err){
        console.error("Lỗi Import:", err);
        return NextResponse.json({ success: false, message: "Lỗi Server" }, { status: 500 });
    }
}