import React from "react";

function RefScroll() {
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);
  const testDivRef = React.useRef(null);

  console.log(testDivRef);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setData([...data, search]);
          testDivRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>envoyer</button>
      </form>
      <div style={{ overflow: "scroll", height: "100px" }}>
        {!!data.length && data.map((item, id) => <div key={id}>{item}</div>)}
        <div ref={testDivRef}></div>
      </div>
    </>
  );
}

export default RefScroll;
