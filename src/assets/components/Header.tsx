import MoonIcon from "./icons/MoonIcon"

export default function Header() {
  return (
    <>
      <header className="bg-hero-desktop-light h-[330px] bg-cover bg-center bg-no-repeat">
        <div className="max-container h-full">
          <div>
            <h1>Header Component</h1>
            <MoonIcon
              fillColor="#FFFFFF"
              stroke="#FFFFFF"
              hoverState="hover:fill-white cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  )
}
