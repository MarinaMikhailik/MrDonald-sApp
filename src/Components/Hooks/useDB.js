import { useEffect, useState } from "react";
import { ref } from "firebase/database";


export const useDB = (database) => {
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const dbRef =  database.ref('goods');
    dbRef.on('value', (snapshot) => {
      setDb(snapshot.val());
      console.log('snapshot', snapshot.val());
    }, (err) => {
      setError(err);
    })
  }, [database])
  return {db, error};
}

