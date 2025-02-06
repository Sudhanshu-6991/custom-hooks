import { useState } from 'react'
import { useFetch } from './hooks/useFetch'






function App() {
  const [currentPost, setCurrentPost] = useState(1);
 const{ finalData, loading }  = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);
  
 if(loading){
  return<div>
    Loading...
  </div>
 } 

  return (  
    <>
        <button onClick={()=> setCurrentPost(1)}>1</button>
        <br />
        <br />
        <button onClick={()=> setCurrentPost(2)}>2</button>
        <br />
        <br />
        <button onClick={()=> setCurrentPost(3)}>3</button>
        <br />
        <br />
        {JSON.stringify(finalData)}

    </>
  )
}



export default App
