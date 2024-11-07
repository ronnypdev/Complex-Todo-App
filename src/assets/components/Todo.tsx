import { useState } from "react"

import PencilIcon from "./icons/PencilIcon"
import CrossIcon from "./icons/CrossIcon"

export default function Todo() {

  // const [todoLisItem, setTodoListItem] = useState<string>("");

  // function handleTodoItemChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setTodoListItem(event.target.value)
  // }


  return (
    <>
      <div className="todo-container bg-white w-[540px] h-[500px] my-0 mx-auto rounded-[5px] shadow-paleWhite">
        <div className="todo-wrapper h-[90%] overflow-y-auto min-h-[auto]">
          <div className="p-6 border-t first:border-0 flex justify-between items-center group/controls">
            <div className="todo-flex-col">
              <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems1" name="listItems1"/>
              <label className="cursor-pointer" htmlFor="listItems1">Jog around the park 3x</label>
            </div>
            <div className="hidden group-hover/controls:flex group-hover/controls:justify-center group-hover/controls:items-center">
              <PencilIcon fillColor="#494C6B" hoverState="hover:fill-midGrey cursor-pointer mr-2"/>
              <CrossIcon fillColor="#494C6B" hoverState="hover:fill-midGrey cursor-pointer mr-2"/>
            </div>
          </div>
          <div className="p-6 border-t border-t-lightGrey flex justify-between items-center group/controls">
            <div className="todo-flex-col">
              <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems2" name="listItems2"/>
              <label className="cursor-pointer" htmlFor="listItems2">10 minutes meditation</label>
            </div>
            <div className="hidden group-hover/controls:flex group-hover/controls:justify-center group-hover/controls:items-center">
              <PencilIcon fillColor="#494C6B" hoverState="hover:fill-midGrey cursor-pointer mr-2"/>
              <CrossIcon fillColor="#494C6B" hoverState="hover:fill-midGrey cursor-pointer mr-2"/>
            </div>
          </div>
        </div>
        <div className="controls border-t border-t-lightGrey h-[10%] flex justify-between items-center px-[14px]">
          <p className="text-shadeGrey"><span>5</span> items left</p>
          <div className="flex justify-between items-center">
            <p className="ml-4 text-primaryBlue cursor-pointer">All</p>
            <p className="ml-4 text-shadeGrey cursor-pointer">Active</p>
            <p className="ml-4 text-shadeGrey cursor-pointer">Completed</p>
          </div>
          <p className="text-shadeGrey cursor-pointer">Clear Completed</p>
        </div>
      </div>
    </>
  )
}
