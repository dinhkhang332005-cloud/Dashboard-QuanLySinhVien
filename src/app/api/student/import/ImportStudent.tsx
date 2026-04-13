
import React, { useState } from 'react'
import { FaFileUpload } from 'react-icons/fa';
import * as XLSX from 'xlsx';

interface ImportStudentProps{
  onImportSucces :(data:any[])=>void;
}

const ImportStudent = ({onImportSucces}:ImportStudentProps) => {

  const handleUploadFile =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e.target.files?.[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = (event)=>{
      const data = event.target?.result;
      const workbook = XLSX.read(data,{type:'array'});
      const firstSheetName = workbook.SheetNames[0];
      const firstSheet = workbook.Sheets[firstSheetName];
      const paseData = XLSX.utils.sheet_to_json(firstSheet);
      onImportSucces(paseData);
      e.target.value="";
    }
    reader.readAsArrayBuffer(file);

  }
  return (
    <div >
      <label htmlFor='upload'><FaFileUpload className=' w-7 h-7 rounded-full flex items-center justify-center cursor-pointer  bg-amber-300 p-2' /></label>
      <input 
        hidden
        id='upload'
        type="file" 
        accept=".xlsx, .xls" 
        onChange={handleUploadFile} 
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-100 file:text-amber-700 hover:file:bg-amber-200 cursor-pointer"
      />
    </div>
    
  )
}

export default ImportStudent
