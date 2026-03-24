"use client"


const announcements=[
    {
    id : 1,
    title:"Lorem ipsum dolor sit",
    time :"2025-01-01",
    description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, consectetur?"
    },
    {
    id : 2,
    title:"Lorem ipsum dolor sit",
    time :"2025-01-01",
    description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, consectetur?"
    },
    {
    id : 3,
    title:"Lorem ipsum dolor sit",
    time :"2025-01-01",
    description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, consectetur?"
    }
]

const Announcements = () => {
    const bgColors=["bg-blue-50", "bg-purple-50", "bg-yellow-50"];
  return (
    <div className="bg-white rounded-md p-4">
      <div className='flex justify-between items-center  mb-4'>
                                <h1 className='font-medium text-2xl'>Announcements</h1>
                                <span className="text-xs text-gray-500">View All</span>
        </div>

        <div className="flex flex-col gap-4">
            {announcements.map((announcement,index)=>(
                <div key={announcement.id} className={`p-4 rounded-md ${bgColors[index%3]}`}>
                    <div className="flex justify-between ">
                        <h1 className="font-semibold">{announcement.title}</h1>
                        <span className="text-xs text-gray-400 bg-white p-1 rounded">{announcement.time}</span>
                    </div>
                    <div>
                        <h2 className="text-xs text-gray-400">{announcement.description}</h2>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Announcements
