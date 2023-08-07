import { useReducer } from "react";
import "./App.css";
import Rete from "./rete.jsx";

function App() {
  let site = [
    {
      title: "My Rocket",
      content: "Look",
      author: "Elon Musk",
      likes: 0,
    },
    {
      title: "My Rocket2",
      content: "Look2",
      author: "Elon Musk2",
      likes: 0,
    },
    {
      title: "My Rocket3",
      content: "Look3",
      author: "Elon Musk",
      likes: 0,
    },
  ];

  const [count, updateCount] = useReducer(countReducer, 0);

  function countReducer(state, action) {
    if (action === "increment") {
      return state + 1;
    }
  }
  const revel = () => {
    return site.map((e, key) => {
      return (
        <Rete
          key={key}
          title={e.title}
          author={e.author}
          content={e.content}
          likes={count}
          action={() => updateCount("increment")}
        />
      );
    });
  };
  return (
    <>
      <h1>Profils</h1>

      {revel()}
    </>
  );
}

export default App;
