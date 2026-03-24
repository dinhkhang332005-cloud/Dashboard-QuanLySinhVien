
import ListBottom from '@/app/component/ListBottom'
import Search from '@/app/component/Search'
import Table from '@/app/component/Table'
import { parentsData, role, subjectsData} from '@/lib/data'
import Image from 'next/image'


import Link from 'next/link'

type Subject ={
  id:number,
  name:string,
  teachers:string[],
  
}

const columns = [
  {
    header:"Subjects",
    accessor:"subjects"
  },
  {
    header:"TeacherName",
    accessor:"teacherName",
    className:"hidden md:table-cell"
  },
  {
    header:"Action",
    accessor:"action"
  },
]

const ParentListPage = () => {

const renderRow = (item:Subject)=>(
  <tr key={item.id} className='border-b border-gray-300 even:bg-state-50 text-sm hover:bg-purple-50'>
    <td className='flex items-center gap-4 p-4'>
        {item.name}
    </td >
    <td className='hidden md:table-cell'>{item.teachers.join(",")}</td>
    <td>
      <div className='flex justify-between items-center '>
        <Link href={`/list/teacher/${item.id}`}/>
        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
        <Image src="/view.webp" alt="" width={16} height={16} />
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
      <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
      </div>
      {/* bottom */}
      <div>
        <ListBottom/>
      </div>
    </div>
  )
}

export default ParentListPage
