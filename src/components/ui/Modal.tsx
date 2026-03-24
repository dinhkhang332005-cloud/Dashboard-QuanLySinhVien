
export const CommonModal = ({isOpen,onClose,title,children}:{isOpen:boolean,onClose:()=>void,title:any,children:any})=>{
  if(!isOpen) return null;
  return (
    <div className='fixed inset-0 z-50 items-center justify-center bg-black/50 flex p-4'>
      <div className='bg-white w-full max-w-2xl rounded-2xl p-6 relative'>
      <div className='flex justify-between items-center mb-6'>
          <h2 className='text-xl font-bold text-black'>{title}</h2>
          <button onClick={onClose} className='text-3xl font-bold text-gray-400 hover:text-red-500'>&times;</button>
      </div>
            {children}
      </div>
    </div>
  )
}