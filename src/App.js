import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import ListPage from 'pages/ListPage/ListPage';
import EditPage from 'pages/PostPage/PostIdPage/EditPage/EditPage';
import MessagePage from 'pages/PostPage/PostIdPage/MessagePage/MessagePage';
import PostIdPage from 'pages/PostPage/PostIdPage/PostIdPage';
import PostPage from 'pages/PostPage/PostPage';

import './App.scss';

function loadData() {
  return null;
}

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: 'list', element: <ListPage /> },
  {
    path: 'post',
    element: <PostPage />,
  },
  {
    path: 'post/:id',
    element: <PostIdPage />,
    loader: loadData, // 해당 경로에 접근했을 때 실행될 로더 함수
  },
  { path: 'post/:id/edit', element: <EditPage /> },
  { path: 'post/:id/message', element: <MessagePage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
