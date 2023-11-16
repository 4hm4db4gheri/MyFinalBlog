import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Outlet, Link } from 'react-router-dom';
import MyInfo from "./mycomponent";

const currentUrl = window.location.href;

interface PostData{
    title: string;
    date: string;
    timeSpent: string;
    content: string;
    imageSrc: string;
    postID: string
}

function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);
  if(currentUrl.split('/')[3]!='post'){
    return (
        <div>
            {posts.map((post) => (
                
                
                <MyInfo
                    title={post.title}
                    content={post.content}
                    date={formatDate(post.date)}
                    timeSpent={post.timeSpent+' min read'}
                    imageSrc={post.imageSrc}
                    postID={post.postID}
                />
            ))}
            <Outlet />
        </div>
    );
  }
  function formatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      };
      return new Date(dateString).toLocaleDateString('en-US', options)
  }
}

ReactDOM.createRoot(document.getElementById('app')!).render(
    <Posts/>
)

// ReactDOM.createRoot(document.getElementById("app")!).render(
//     <React.StrictMode>

//         <MyInfo
//             title='asd'
//             date='as'
//             content='assadfffffffffffffffffffffffffffffffffff'
//             imageSrc='https://cdn.hashnode.com/res/hashnode/image/upload/v1683525313231/RC4cg5koq.png?w=1600&h=840&fit=crop&crop=entropy&auto=format&auto=compress,format&format=webp'
//             timeSpent='asdf'
//         />
//     </React.StrictMode>
// )
