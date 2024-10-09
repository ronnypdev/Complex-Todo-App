import { useState } from "react";
import Header from "./assets/components/Header";
import Todo from "./assets/components/Todo";

function App() {
  return (
    <>
      <main className="h-full flex justify-center">
        <div className="max-container">
          <Header />
          <Todo />
        </div>
      </main>
    </>
  )
}

export default App
