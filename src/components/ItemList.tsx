import { Button } from "./Button";
import { Items, ReactSetState } from "./types/utils";

type ItemList = {
    items: Items[];
    setItems: ReactSetState<Items[]>;
}

export const ItemList = ({items, setItems}:ItemList) => {
   
     const handleDelete = (id: string ) => {
    setItems(todoArr => todoArr.filter(data => data._id !== id));
  }
    return (
      items.map((todos, key) => (
    <div
      key={todos._id}
      className="h-12 flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2 overflow-auto"
    >
      <p>{todos.item}</p>
      <Button
        className="text-red-600"
        handleDelete={() => handleDelete(todos._id)}
      >
        dlt
      </Button>
    </div>
  ))
  )
};
