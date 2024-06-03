import { useState } from 'react'
import './App.css'
import ImageHeader from './components/ImageHeader'
import {Input} from './components/Input'
import { Button } from './components/Button'
import { type Items } from './components/types/utils'
import { ItemList } from './components/ItemList'


function App() {
  const [items, setItems] = useState<Items[]>([]);
  // console.log(items)
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    setItems(prev => [...prev, {item:inputValue,_id:Date.now().toString()}])
    setInputValue('');
    e.preventDefault();
    // console.log(items)
  };

 

  return ( 
    <div className='h-[100vh] flex flex-col justify-center items-center'>
      <ImageHeader />
      
      <div className='w-[350px]'>
        <form className='mb-5' onSubmit={handleSubmit}>
          <Input inputValue={inputValue} handleChange={setInputValue} type='text'/>
          <Button className='bg-slate-600 w-full p-2' >Add</Button>
        </form>
        <div className=' h-52 overflow-y-auto'>  
          <ItemList items={items} setItems={setItems}/>
        </div>
      </div>
    </div>
  )
}

export default App


// line 24 type giving not nesecery it can infer itself