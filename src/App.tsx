import { useState } from 'react'
import './App.css'
import ImageHeader from './components/ImageHeader'

function App() {
  const [item, setItem] = useState<string[]>(['']);

  return ( 
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader />
      
      <div className='w-[350px]'>
        <form className='mb-5'>
          <input type="text"  className='w-full p-2 rounded-sm mb-2'/>
          <button type='submit' className='bg-gray-700 w-full p-2 hover:opacity-80'>Add</button>
        </form>
        <div className=' h-52 overflow-y-auto'>  
          <div className='h-12 flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2 overflow-auto'>
            <p>js</p>
            <button className='text-red-600'>
              dlt
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
