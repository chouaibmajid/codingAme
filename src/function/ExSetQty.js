import React from "react";
import { createRef } from "react";
import Counter from "./Counter";

function App() {
  const [cartItems, setCartItems] = React.useState([
    {
      id: "1",
      name: "wewe",
      price: 45,
      qte: 1,
    },
    {
      id: "2",
      name: "wewe2",
      price: 35,
      qte: 2,
    },
    {
      id: "3",
      name: "wewe3",
      price: 55,
      qte: 1,
    },
    {
      id: "4",
      name: "wewe4",
      price: 75,
      qte: 3,
    },
  ]);
  console.log(cartItems);
  const handleSetQte = (id, value) => {
    if (value === "dec") {
      const newArr = cartItems.map((item) => {
        if (item.id === id)
          return {
            ...item,
            qte: item.qte > 1 ? item.qte - 1 : item.qte,
          };
        else return item;
      });
      setCartItems(newArr);
    } else if (value === "inc") {
      const newArr = cartItems.map((item) => {
        if (item.id === id)
          return {
            ...item,
            qte: item.qte + 1,
          };
        else return item;
      });
      setCartItems(newArr);
    }
  };
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.name}/{item.price}/
          <button onClick={() => handleSetQte(item.id, "dec")}>-</button>
          {item.qte}
          <button onClick={() => handleSetQte(item.id, "inc")}>+</button>
        </div>
      ))}
    </div>
  );
  // const [search, setSearch] = React.useState("");
  // const [data, setData] = React.useState([]);
  // const testDivRef = React.useRef(null);
  // const [elRefs, setElRefs] = React.useState([]);

  // React.useEffect(() => {
  //   setElRefs((elRefs) =>
  //     Array(data.length)
  //       .fill()
  //       .map((_, i) => elRefs[i] || createRef())
  //   );
  // }, [data]);
  // console.log(elRefs);
  // return (
  //   <>
  //     <form
  //       onSubmit={(e) => {
  //         e.preventDefault();
  //         setData([...data, search]);
  //         testDivRef.current.scrollIntoView({
  //           behavior: "smooth",
  //         });
  //       }}
  //     >
  //       <input
  //         type="text"
  //         value={search}
  //         onChange={(e) => setSearch(e.target.value)}
  //       />
  //       <button>envoyer</button>
  //     </form>
  //     <div style={{ overflow: "scroll", height: "100px" }}>
  //       {!!data.length &&
  //         data.map((item, id) => (
  //           <div
  //           ref={elRefs[id]}
  //             key={id}
  //             style={{ color: "red" }}
  //             onClick={() => elRefs[id].current.style.color= "green" }
  //           >
  //             {item}
  //           </div>
  //         ))}
  //       <div ref={testDivRef}></div>
  //     </div>
  //   </>
  // );
}

export default App;
