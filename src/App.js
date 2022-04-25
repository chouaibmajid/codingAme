import React from "react";
import { samuel } from "./objet";
function App() {
  const [data,setData] = React.useState()
  const convertToTable = () => {
    var newArr = [];
    for(let key in samuel){
      newArr.push({
      id:key,
      ...samuel[key],
      })
    }
    setData(newArr)
  }
 React.useEffect(() => {
    convertToTable();
  }, []);
  console.log(data)
  if(!data) return <p>...Loading</p>
  return (<div>
    
    {data.map(item => (
      <div>
        <p>{item.name}</p>
        <p>{item.lastName}</p>
      </div>
    ))}
    
    </div>);
}

export default App;
