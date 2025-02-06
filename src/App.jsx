import { useState } from 'react'
//import './App.css'

//Custom hook

function useCounter(){
  const [count, setCount] = useState(0);
  function increase(){
    setCount(()=>count+1)       
}
  function decrease(){
    setCount(()=>count-1)       
}
  function reset(){
    setCount(0)       
}

return {
  count : count,
  increase : increase,
  decrease : decrease,
  reset : reset
}

}


function App() {
  
  
  

  return (  
    <>
       <Counter/>
       <Counter/>
       <Counter/>
       <Counter/>
     
    </>
  )
}

function Counter(){
  const {count, increase, decrease, reset} = useCounter();
   return <div>
    <div>
    { count }
    </div>
     <div>
         <button onClick={increase}> Increase count </button>
     <br />
     <br />
         <button onClick={decrease}> Decrease count </button>  
     <br />
     <br />
         <button onClick={reset}> Reset Count </button>  
     </div>
   </div>
}

export default App
