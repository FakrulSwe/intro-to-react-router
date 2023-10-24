import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './assets/components/About/About.jsx';
import Contact from './assets/components/Contact/Contact.jsx';
import Header from './assets/components/Header/Header.jsx';
import Home from './assets/components/Home/Home.jsx';
import First from './assets/components/First/First.jsx';
import Friends from './assets/components/Friends/Friends.jsx';
import FriendDetail from './assets/components/FriendDetail/FriendDetail.jsx';
import Posts from './assets/components/Posts/Posts.jsx';
import Post from './assets/components/Post/Post.jsx';
import PostDetail from './assets/components/PostDetail/PostDetail.jsx';
import Comments from './assets/components/Comments/Comments.jsx';
import CommentDetail from './assets/components/CommentDetail/CommentDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ])


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <First></First>
      },
      {
        path:'/friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: '/friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'post/:postId',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'comments',
        element: <Comments></Comments>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments')
      },
      {
        path: 'comment/:commentId',
        element: <CommentDetail></CommentDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <div>404 Not Found</div>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
