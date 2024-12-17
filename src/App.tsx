import Header from "./assets/components/Header";
import Todo from "./assets/components/Todo";

function App() {
  return (
    <>
      <main className="h-full flex-col justify-center">
        <Header />
        <div className="max-container relative bottom-32">
          <Todo />
        </div>
        {/* <div className="text-center">
          <p className="text-sm leading-normal font-normal not-italic -tracking[0.194px] text-shadeGrey">Drag and drop to reorder list</p>
        </div> */}
      </main>
    </>
  )
}

export default App
