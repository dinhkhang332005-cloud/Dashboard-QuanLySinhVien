
import ListBottom from '@/app/component/ListBottom'
import Search from '@/app/component/Search'
import Table from '@/app/component/Table'
import { parentsData, role, teachersData } from '@/lib/data'
import Image from 'next/image'


import Link from 'next/link'

type Parent ={
  id:number,
  name:string,
  email?:string,
  students:string[],
  phone:string[],
  address:string,
}

const columns = [
  {
    header:"Info",
    accessor:"info"
  },
  {
    header:"StudentName",
    accessor:"studentName",
    className:"hidden md:table-cell"
  },
  {
    header:"Phone",
    accessor:"phone",
    className:"hidden lg:table-cell"
  },
  {
    header:"Address",
    accessor:"address",
    className:"hidden lg:table-cell"
  },
  {
    header:"Action",
    accessor:"action"
  },
]

const ParentListPage = () => {

const renderRow = (item:Parent)=>(
  <tr key={item.id} className='border-b border-gray-300 even:bg-state-50 text-sm hover:bg-purple-50'>
    <td className='flex items-center gap-4 p-4'>
      <div className='flex flex-col'>
        <h3 className='font-semibold'>{item.name}</h3>
        <h4 className='text-xs text-gray-500'>{item?.email}</h4>
      </div>
    </td>
    <td className='md:table-cell'>{item.students}</td>
    <td className='md:table-cell'>{item.phone}</td>
    <td className='md:table-cell'>{item.address}</td>
    <td>
      <div className='flex justify-between items-center '>
        <Link href={`/list/teacher/${item.id}`}/>
        <button>
        <Image src="/view.webp" alt='' width={16} height={16} className='bg-blue-400 rounded-full ' />
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
      <Table columns={columns} renderRow={renderRow} data={parentsData}/>
      </div>
      {/* bottom */}
      <div>
        <ListBottom/>
      </div>
    </div>
  )
}

export default ParentListPage