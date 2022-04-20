import React from "react";
import { createRef } from "react";
import Counter from "./Counter";

function App() {
  return (
    <Counter />
  )
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
