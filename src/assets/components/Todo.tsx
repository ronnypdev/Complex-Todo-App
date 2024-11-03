export default function Todo() {
  return (
    <>
      <div className="todo-container bg-white w-[540px] h-[500px] my-0 mx-auto rounded-[5px] shadow-paleWhite">
        <div className="todo-wrapper h-[90%] min-h-fit">
          <div className="p-6 border-t first:border-0">
            <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems1" name="listItems1"/>
            <label className="cursor-pointer" htmlFor="listItems1">Jog around the park 3x</label>
          </div>
          <div className="p-6 border-t border-t-lightGrey">
            <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems2" name="listItems2"/>
            <label className="cursor-pointer" htmlFor="listItems2">10 minutes meditation</label>
          </div>
          <div className="p-6 border-t border-t-lightGrey">
            <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems3" name="listItems3"/>
            <label className="cursor-pointer" htmlFor="listItems3">Read for 1 hour</label>
          </div>
          <div className="p-6 border-t border-t-lightGrey">
            <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems4" name="listItems4"/>
            <label className="cursor-pointer" htmlFor="listItems4">Pick up groceries</label>
          </div>
          <div className="p-6 border-t border-t-lightGrey">
            <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems5" name="listItems5"/>
            <label className="cursor-pointer" htmlFor="listItems5">Complete Todo App on Frontend Mentor</label>
          </div>
          <div className="p-6 border-t border-t-lightGrey">
            <input className="cursor-pointer checkbox-round relative right-[11px] bottom-[2px]" type="checkbox" id="listItems6" name="listItems6"/>
            <label className="cursor-pointer" htmlFor="listItems6">Jog around the park 3x</label>
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
