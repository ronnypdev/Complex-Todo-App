import iconMoon from "./icons/iconMoon"

export default function Header() {
  return (
    <>
      <header className="bg-hero-desktop-light h-[330px] bg-cover bg-center bg-no-repeat">
        <div className="max-container h-full">
          <div>
            <h1>Header Component</h1>
            <iconMoon />
          </div>
        </div>
      </header>
    </>
  )
}
