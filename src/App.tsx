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
        </div>
      </main>
    </>
  )
}

export default App
