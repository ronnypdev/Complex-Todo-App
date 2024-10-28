
export default function Todo() {
  return (
    <>
      <div className="todo-container bg-white w-[540px] h-[439px] my-0 mx-auto rounded-[5px] border-red-300 border-2 shadow-paleWhite">
        <div className="todo-wrapper h-[90%] min-h-fit">
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
          <div>
            <input type="checkbox" id="listItems" name="listItems" checked />
            <label htmlFor="listItems">Jog around the park 3x</label>
          </div>
        </div>
        <div className="controls border-t-2 border-t-purple-300 h-[10%] flex justify-between items-center px-[14px]">
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
