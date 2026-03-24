import React from 'react'
type Column ={
    header:string,
    accessor:string,
    classname?:string
}

type TabbleProps ={
  columns:Column[];
  renderRow:(item:any)=>React.ReactNode;
  data:any[];
}

const Table = ({columns,renderRow,data}:TabbleProps) => {
  return (
    <table className='w-full mt-4'>
      <thead>
        <tr className='text-left text-gray-500 text-sm'>
         {columns.map((col)=>(
          <th key={col.accessor} className={col.classname}>{col.header}</th>
         ))}
        </tr>
      </thead>
      <tbody>{data.map((item)=>renderRow(item))}</tbody>
    </table>
  )
}

export default Table
