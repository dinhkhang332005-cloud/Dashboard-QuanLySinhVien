import React from 'react'

interface ListBottomPage {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ListBottom = ({currentPage,totalPages,onPageChange}:ListBottomPage) => {
   const getPagination =()=>{
    if(totalPages<=5) return Array.from({length:totalPages},(_,i)=>i+1);
    if(currentPage<=3) return [1,2,3,4,'...',totalPages]
    if(currentPage>totalPages-2) return[1,'...',totalPages-3,totalPages-2,totalPages-1,totalPages];
    return [1,'...',currentPage-1,currentPage,currentPage+1,'...',totalPages]
   }
   const paginationItem = getPagination();
  return (
    <div className='flex p-4 items-center justify-between text-gray-500'>
      <button disabled={currentPage===1}
              onClick={()=>onPageChange(currentPage-1)}
              className='bg-gray-200 rounded-xl py-2 px-4 font-semibold'>
                Pre
      </button>
      <div className='flex items-center gap-2 '>
        {paginationItem.map((item,index)=>{
          if(typeof item==='string'){
            return(
              <span 
                key={index}
                className='px-2 py-1 text-gray-400 font-bold tracking-wides'
              >
                {item}
              </span>
            )
          }
          return(
            <span   
              key={index} 
              onClick={()=>onPageChange(item as number)}
              className={`py-1 px-3 rounded transition-colors ${
              currentPage === item 
              ? 'bg-blue-500 text-white font-bold' // Tô màu trang hiện tại
              : 'hover:bg-gray-100'
              }`} >
                {item}
            </span>
          )
})}
      </div>
      <button disabled={currentPage===totalPages}
              onClick={()=>onPageChange(currentPage+1)}
              className='bg-gray-300 rounded-xl py-2 px-4 font-semibold'>Next</button>
    </div>
  )
}

export default ListBottom 