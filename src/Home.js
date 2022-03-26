import React , {useRef, useEffect} from 'react'
import { useAuth } from './UseContextExmple';

function Home() {
const impRef = useRef();
  const wewe = (e) => {
    e.preventDefault();
   console.log(e);
  }
  useEffect(() => {

    impRef.current.focus();
  },[])
  
    return (
       <div>
         <form onSubmit={wewe} >
           <label id="name"> name </label>
          <input type="text" ref={impRef} id="name" placeholder="entrez votre name" />
          <br />
          <label id="fname"> First name </label>
          <input type="text" id="fname" placeholder="entrez votre fname" />
          <br />

          <button type="submit" >envoyer</button>
         </form>
       </div>
    )
}

export default Home
