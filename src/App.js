import { useState } from "react";
import Count from "./components/Count";
import { CountContext } from "./countContext";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2 className="scroll-m-20 text-center pb-2 text-3xl font-semibold tracking-normal first:mt-0">
        The context API
      </h2>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </>
  );
};

export default App;
