type Button = {
    children: JSX.Element | string;
    className?: string;
    handleDelete?: () => void;
    type?: 'submit' | 'button' | 'reset';
};


export const Button = ({children, className, handleDelete, type}:Button) => {
  return (
      <button className={`${className}`} onClick={handleDelete} type={type}>{children}</button>
  )
}


