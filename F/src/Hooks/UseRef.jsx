// import React, { useRef } from 'react'

// const UseRef = () => {




// let R = useRef()



// R.current.setAttribute("color","red")





//   return (
//     <div ref={R.current}>
//       USeREF
      
//     </div>
//   )
// }

// export default UseRef
import React, { useRef, useEffect } from 'react';

const UseRef = () => {
  const R = useRef();

    
      R.current.focus();
  
    
  

  return (
    <div ref={R}>
      USeREF
      <input type="text" />
    </div>
  );
};

export default UseRef;
