import MoonIcon from "./icons/MoonIcon"
import OvalIcon from "./icons/OvalIcon"

export default function Header() {
  return (
    <>
      <header className="bg-hero-desktop-light h-[330px] bg-cover bg-center bg-no-repeat">
        <div className="max-container h-full">
          <div>
            <div className="list-header">
              <h1>Header Component</h1>
              <MoonIcon
                fillColor="#FFFFFF"
                stroke="#FFFFFF"
                hoverState="hover:fill-white cursor-pointer"
              />
            </div>
            <label htmlFor="listItem">
              <OvalIcon
                fillColor="#E3E4F1"
                stroke="#E3E4F1"
                hoverState="hover:fill-lightGrey cursor-pointer"
              />
              <input type="text" name="listItem" id="listItem" placeholder="Create a new todo…"/>
            </label>
          </div>
        </div>
      </header>
    </>
  )
}
