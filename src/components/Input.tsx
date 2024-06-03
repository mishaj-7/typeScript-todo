import { ReactSetState } from "./types/utils";

type Input = {
    inputValue: string;
    handleChange: ReactSetState<string>;
    type:'text' | 'radio' | 'image' | 'color' | 'image' | 'file'
};


export const Input = ({type, inputValue, handleChange}:Input) => {
  return (
   <input
     value={inputValue}
     required
     type={type}
     className='w-full p-2 rounded-sm mb-2'
     onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleChange(e.target.value)}
     />
  )
}



