import { useState } from "react";

import PencilIcon from "./icons/PencilIcon";
import CrossIcon from "./icons/CrossIcon";
import OvalIcon from "./icons/OvalIcon";

export default function Todo() {
  // const [todoLisItem, setTodoListItem] = useState<string>("");

  // function handleTodoItemChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setTodoListItem(event.target.value)
  // }

  return (
    <>
      <form className="w-[540px] h-[540px] my-0 mx-auto">
        <label htmlFor="listInput" className="relative mb-8 block">
          <OvalIcon />
          <input className="w-full max-w-full py-[23px] pr-5 pl-[47px] shadow-paleWhite rounded-[5px] placeholder:text-darkGrey" type="text" name="listInput" id="listInput" placeholder="Create a new todo item..."/>
        </label>
        <div className="w-full h-full max-w-full bg-white rounded-[5px] shadow-paleWhite">
          <div className="h-[85%] overflow-y-auto min-h-[auto]">
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
