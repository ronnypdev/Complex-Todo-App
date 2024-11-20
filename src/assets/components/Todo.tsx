import { useState } from "react";
import { nanoid } from 'nanoid';

import PencilIcon from "./icons/PencilIcon";
import CrossIcon from "./icons/CrossIcon";
import OvalIcon from "./icons/OvalIcon";

type TodoListItem = {
  id: string,
  listItem: string,
  completed: boolean,
}

export default function Todo() {
  const [todoLisItem, setTodoListItem] = useState<string>("");
  const [addListItems, setAddListItems] = useState<TodoListItem[]>([]);

  function handleTodoItemChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoListItem(event.target.value);
  }

  function addTodoItem() {
    setAddListItems([
      ...addListItems,
      {
        id: nanoid(),
        listItem: todoLisItem,
        completed: false
      }
    ])
  }

  function removeTodoItem() {
    setAddListItems(prevAddListItems =>
      prevAddListItems.filter(item =>
        item.id !== addListItems[0].id
      )
    )
  }

  function updateTodoItem(itemId: string, updatedItem: string) {
    setAddListItems(prevAddListItems =>
      prevAddListItems.map(item =>
        item.id === itemId ? { ...item, listItem: updatedItem } : item
      )
    )
    console.log(addListItems)
  }

  function submitTodoData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addTodoItem();
  }

  return (
    <>
      <form className="w-[540px] h-[540px] my-0 mx-auto" onSubmit={submitTodoData}>
        <label htmlFor="listInput" className="relative mb-8 block">
          <OvalIcon />
          <input
            className="w-full max-w-full py-[23px] pr-5 pl-[47px] shadow-paleWhite rounded-[5px] placeholder:text-darkGrey"
            type="text"
            onChange={handleTodoItemChange}
            value={todoLisItem}
            name="listInput"
            id="listInput"
            placeholder="Create a new todo item..."
          />
        </label>
        <div className="w-full h-full max-w-full bg-white rounded-[5px] shadow-paleWhite">
          <div className="h-[85%] overflow-y-auto min-h-[auto]">
            {addListItems.map((item, index) => (
              <div key={item.id}
                className={`p-6 ${index === 0 ? "border-t first:border-0" : "border-t border-t-lightGrey"}
                flex justify-between items-center group/controls`}
              >
                <div className="todo-flex-col">
                  <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]"
                    type="checkbox"
                    id={item.id}
                    name={item.id}
                  />
                  <label className="cursor-pointer" htmlFor={item.id}>{item.listItem}</label>
                </div>
                <div className="hidden group-hover/controls:flex group-hover/controls:justify-center group-hover/controls:items-center">
                  <PencilIcon
                    fillColor="#494C6B"
                    toggleOnClick={() => updateTodoItem(item.id, item.listItem)}
                    hoverState="hover:fill-midGrey cursor-pointer mr-2" />
                  <CrossIcon
                    fillColor="#494C6B"
                    toggleOnClick={removeTodoItem}
                    hoverState="hover:fill-midGrey cursor-pointer mr-2" />
                </div>
              </div>
            ))}
          </div>


          <div className="controls border-t border-t-lightGrey h-[15%] flex justify-between items-center px-[14px]">
            <p className="text-shadeGrey"><span>5</span> items left</p>
            <div className="flex justify-between items-center">
              <p className="ml-4 text-primaryBlue cursor-pointer">All</p>
              <p className="ml-4 text-shadeGrey cursor-pointer">Active</p>
              <p className="ml-4 text-shadeGrey cursor-pointer">Completed</p>
            </div>
            <p className="text-shadeGrey cursor-pointer">Clear Completed</p>
          </div>
        </div>
      </form>
    </>
  )
}
