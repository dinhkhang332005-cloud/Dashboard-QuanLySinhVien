
import { role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.webp",
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.webp",
        label: "Teachers",
        href: "/list/teacher",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.webp",
        label: "Students",
        href: "/list/student",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.webp",
        label: "Parents",
        href: "/list/parent",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.webp",
        label: "Subjects",
        href: "/list/subject",
        visible: ["admin"],
      },
      {
        icon: "/class.webp",
        label: "Classes",
        href: "/list/class",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.webp",
        label: "Lessons",
        href: "/list/lesson",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.webp",
        label: "Exams",
        href: "/list/exam",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.webp",
        label: "Assignments",
        href: "/list/assignment",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.webp",
        label: "Results",
        href: "/list/result",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/attendance.webp",
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/calendar.webp",
        label: "Events",
        href: "/list/event",
         visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/message.webp",
        label: "Messages",
        href: "/list/message",
         visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/announcement.webp",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.webp",
        label: "Profile",
        href: "/profile",
         visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.webp",
        label: "Settings",
        href: "/settings",
         visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.webp",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className='mt-4 text-sm '>
      {menuItems.map((i)=>(
        <div className='flex flex-col gap-2' key={i.title}>
            <span className='hidden lg:block font-light text-gray-400 my-4'>{i.title}</span>
            {i.items.map((item)=>{
              if(item.visible.includes(role)){
                return(
                <Link className='flex gap-4 p-2 rounded hover:bg-blue-100' key={item.label} href={item.href}>
                <Image src={item.icon} height={20} width={20} alt=""></Image>
                <span className='text-gray-600 font-bold hidden lg:block'>{item.label}</span>
                </Link>
                )
              }
            })}
        </div>
      )
    )}
    </div>
  )
}

export default Menu
