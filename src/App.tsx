import { useState } from 'react'
import './App.css'
import ImageHeader from './components/ImageHeader'

type Items = {
  item: string;
  _id: string;
}
function App() {
  const [items, setItems] = useState<Items[]>([]);
  // console.log(items)
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    setItems(prev => [...prev, {item:inputValue,_id:Date.now().toString()}])
    setInputValue('');
    e.preventDefault();
    console.log(items)
  };

  const handleDelete = (id: string ) => {
    setItems(todoArr => todoArr.filter(data => data._id !== id));
  }

  return ( 
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader />
      
      <div className='w-[350px]'>
        <form className='mb-5' onSubmit={handleSubmit}>
          <input
            value={inputValue}
            required
            type="text"
            className='w-full p-2 rounded-sm mb-2'
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInputValue(e.target.value)}
          />
          <button type='submit' className='bg-gray-700 w-full p-2 hover:opacity-80'>Add</button>
        </form>
        <div className=' h-52 overflow-y-auto'>  
          {items.map((todos, key) => (
            <div key={todos._id} className='h-12 flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2 overflow-auto'>
              <p>{todos.item}</p>
              <button
                className='text-red-600'
                onClick={()=>handleDelete(todos._id)}
              >
              dlt
            </button>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App


// line 24 type giving not nesecery it can infer itself