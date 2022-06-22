import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import React, { useEffect, useState } from "react";

import Profile from "./components/Profile";
import {db,storage} from'./firebase--config'
function App() {
  const [user,setuser]=useState({});
  
  useEffect(() => {
    const fetchdata = async () => {
      const que = query(ref(db, "Users"), orderByChild("id"), equalTo("LCrazI2s2EaCwf1k2ObBK4OlaZu2"));
      await get(que)
        .then((snapshot) => {
          var records = {}
          snapshot.forEach(childsnapshot => {
            // records.push(childsnapshot.val())
            records=childsnapshot.val()
          });
          setuser(records)
        })
    }
    fetchdata()
  }, [])
  return (
    <div className="App">
      <Profile
       {...user} 
       />
    </div>
  );
}

export default App;
