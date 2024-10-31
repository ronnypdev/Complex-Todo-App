import { useState } from "react";
import Header from "./assets/components/Header";
import Todo from "./assets/components/Todo";

function App() {
  return (
    <>
      <main className="h-full flex-col justify-center">
          <Header />
        <div className="max-container relative bottom-12">
          <Todo />
          <div className="text-center mt-12">
            <p className="text-sm leading-normal font-normal not-italic -tracking[0.194px] text-shadeGrey">Drag and drop to reorder list</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
