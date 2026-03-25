
import { FaSearch } from 'react-icons/fa'

interface SearchProps{
  onSearch:(value:string)=>void;
}
const Search = ({onSearch}:SearchProps) => {
  return (
    <div>
      <div className=' flex border rounded-2xl border-gray-400 items-center gap-2 px-2 py-1 w-full'>
                  <FaSearch />
                  <input 
                        onChange={(e)=>onSearch(e.target.value)}
                        type="text" placeholder='Search...' className='outline-none' />
          </div >
    </div>
  )
}

export default Search
