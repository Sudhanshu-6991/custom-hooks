import { useState } from 'react'
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/use-prev';






function App() {
  
  

  return (  
    <>
        <Component/>

    </>
  )
}

function Component(){
  const [value, setValue] = useState(0);
  const prevVal = usePrev(value);
  return(<>
         {value}
         <button onClick={
          ()=> {
            setValue(value+1);
          }

         }> Count </button>
         <p>The previous value is {prevVal}</p>
  
  </>)
}


export default App
