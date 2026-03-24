
import ListBottom from '@/app/component/ListBottom'
import Search from '@/app/component/Search'
import Table from '@/app/component/Table'
import {  assignmentsData, role,  } from '@/lib/data'
import Image from 'next/image'


import Link from 'next/link'

type Assigment ={
  id:number,
  subject:string,
  class:string,
  teacher:string,
  date:string

}

const columns = [
  {
    header:"SubjectName",
    accessor:"subjectname"
  },
  {
    header:"Class",
    accessor:"class",
    className:"hidden md:table-cell"
  },
  {
    header:"Teacher",
    accessor:"teacher",
    className:"hidden lg:table-cell"
  },
  {
    header:"Date",
    accessor:"date",
    className:"hidden lg:table-cell"
  },
  {
    header:"Action",
    accessor:"action"
  },
]

const AssigmentListPage = () => {

const renderRow = (item:Assigment)=>(
  <tr key={item.id} className='border-b border-gray-300 even:bg-state-50 text-sm hover:bg-purple-50'>
    <td className='flex items-center gap-4 p-4'>
      {item.subject}
    </td>
    <td className='md:table-cell'>{item.subject}</td>
    <td className='md:table-cell'>{item.class}</td>
    <td className='md:table-cell'>{item.teacher}</td>
    <td className='md:table-cell'>{item.date}</td>
    <td>
      <div className='flex gap-2 items-center '>
        <Link href={`/list/teacher/${item.id}`}/>
        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-blue-400'>
        <Image src="/update.webp" alt="" width={16} height={16} />
      </button>
        {role==="admin" &&(
          <button>
        <Image src="/delete.webp" alt='' width={16} height={16} className='bg-yellow-400 rounded-full ' />
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
        <h1 className='font-semibold text-xl hidden md:block '>All teachers</h1>
        <div className='flex flex-col w-full items-center gap-4 md:flex-row md:w-auto'>
          <Search/>
          <div className='flex items-center gap-4'>
            <div className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer bg-amber-300 p-2'>
                        <Image src="/filter.webp" alt='' width={20} height={20}  />
            </div>
            <div className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer  bg-amber-300 p-2'>
                        <Image src="/sort.webp" alt='' width={20} height={20}  />
            </div>
            <div className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer  bg-amber-300 p-2 '>
                        <Image src="/create.webp" alt='' width={20} height={20}  />
            </div>
          </div>
        </div>
      </div>
      {/* list */}
      <div>
      <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
      </div>
      {/* bottom */}
      <div>
        <ListBottom/>
      </div>
    </div>
  )
}

export default AssigmentListPage
