import { createContext, useEffect, useState } from "react";

export const PostsContext = createContext();

export const PostProvider = ({ children }) => {
  const [filteredPosts, setFilteredPosts] = useState();
  const [pagInitionPosts, setPaginitionPosts] = useState();
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [posts, setPosts] = useState({
    loader: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();

      if (res.ok) {
        setFilteredPosts(data)( 
          setPosts({
            loader: false,
            data,
            error: null
          }),
          console.error({ status: res.status, message: res.statusText })
        )
      }

    })();
  }, []);
  useEffect(() => {
    if (filteredPosts) {
      setPaginitionPosts(
        filteredPosts
          ? filteredPosts.slice(
            (activePageNumber - 1) * 10,
            activePageNumber * 10
          )
          : posts.data
      );
    }
  }, [filteredPosts, activePageNumber]);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        filteredPosts,
        setFilteredPosts,
        pagInitionPosts,
        setPaginitionPosts,
        activePageNumber,
        setActivePageNumber,
      }}>
      {children}
    </PostsContext.Provider>

  )
}