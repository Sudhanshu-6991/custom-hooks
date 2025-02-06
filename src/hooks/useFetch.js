import { useEffect, useState } from "react";

export function usePostTitle(){
  const [post, setpost] = useState({});

  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const json = await response.json();
    setpost(json);
  }

  useEffect(()=>{getPosts() },[])

  return post.title;
}

export function useFetch(url){
    const [finalData, setfinalData] = useState({});
    const [loading, setloading] = useState(true);
  async function getresponse(){
      setloading(true);
      const response = await fetch(url);
      const json = await response.json();
      setfinalData(json);
      setloading(false);
    }

    useEffect(()=>{
      getresponse();
      
    },[url])

    return {finalData, loading}
}

