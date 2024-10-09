import { useState } from "react";
import Header from "./assets/components/Header";
import Todo from "./assets/components/Todo";

function App() {
  return (
    <>
      <main className="h-full flex-col justify-center">
          <Header />
        <div className="max-container">
          <Todo />
        </div>
      </main>
    </>
  )
}

export default App
