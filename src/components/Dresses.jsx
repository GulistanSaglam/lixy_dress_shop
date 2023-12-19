import { useEffect } from "react";
import { useState } from "react";

import DressItem from "./DressItem";

export default function Dresses() {
    const [loadedDresses, setLoadedDresses] = useState([]);

    useEffect(() => {
        async function fetchDresses() {
          const response = await fetch('http://localhost:3000/dresses');
            if(!response.ok){
      
            }
           const dresses = await response.json();
           setLoadedDresses(dresses);
          }

          fetchDresses();
    }, []);
   
 
    return (
        <ul id="dresses">
         {loadedDresses.map((dress) => (
         <DressItem key={dress.id} dress={dress} />
         ))}
        </ul>
    );
}