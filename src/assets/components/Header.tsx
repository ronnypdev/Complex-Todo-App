import MoonIcon from "./icons/MoonIcon"
import OvalIcon from "./icons/OvalIcon"

export default function Header() {
  return (
    <>
      <header className="bg-hero-desktop-light h-[330px] bg-cover bg-center bg-no-repeat">
        <div className="max-container h-full">
          <div className="flex justify-center items-center h-full">
            <div className="w-[540px] my-0 mx-auto">
              <div className="list-header flex justify-between items-center mb-10">
                <h1 className="text-white text-[40px] leading-normal uppercase font-bold style not-italic tracking-[15px]">todo</h1>
                <MoonIcon
                  fillColor="#FFFFFF"
                  hoverState="hover:fill-white cursor-pointer"
                />
              </div>
              <label htmlFor="listItem" className="relative">
                <OvalIcon />
                <input className="w-full max-w-full py-[23px] pr-5 pl-[47px] shadow-paleWhite rounded-[5px] placeholder:text-darkGrey" type="text" name="listItem" id="listItem" placeholder="Create a new todo item..."/>
              </label>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
