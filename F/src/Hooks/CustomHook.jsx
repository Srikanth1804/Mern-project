// import React from 'react'
// import { useState,useEffect} from 'react'

// const CustomHook = (url) => {


//     let [Data,setData] = useState(null)

// useEffect(()=>{


// fetch(url).then((data)=>{data.json()}).then((fin)=>{setData(fin)})

// },[url])




//   return [Data]
// }

// export default CustomHook

import { useState, useEffect } from 'react';

const CustomHook = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((Fin) => {
        setData(Fin);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [url]);

  return [data];
};

export default CustomHook;
