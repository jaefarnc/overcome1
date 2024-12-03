import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserRegister from './Pages/UserRegister';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import UserLogin from './Pages/UserLogin';
import OrgLogin from './Pages/OrgLogin';
import OrgRegister from './Pages/OrgRegister';
import UserEdit from './Pages/UserEdit';
import UserPage from './Pages/Userpage';
import OrgPage from './Pages/Orgpage';
import { UserProvider } from './UserContext';
import OrgEdit from './Pages/OrgEdit';
import Jobs from './Pages/JobPages/Jobs'
import PostJobs from './Pages/JobPages/PostJobs';
import JobApplicants from './Pages/JobPages/JobApplicants';
import Connections from './Pages/ConnectionPages/Connections';
import ConnectionRequests from './Pages/ConnectionPages/ConnectionRequests';
//import Chat from './Pages/ConnectionPages/Chat'
import UserPage1 from './Pages/UserPage1';
import UserPage2 from './Pages/UserPage2';
import OrgPage1 from './Pages/Orgpage1';
import OrgPage2 from './Pages/Orgpage2';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'UserReg/',
    element: <UserRegister />

  },
  {
    path: 'UserLogin/',
    element: <UserLogin />
  },
  {
    path: 'OrgLogin/',
    element: <OrgLogin />
  },
  {
    path: 'OrgRegister/',
    element: <OrgRegister />
  },
  {
    path: 'UserEdit/',
    element: <UserEdit />
  },
  {
    path: 'UserPage/',
    element: <UserPage />

  },
  {
    path: 'OrgPage/',
    element: <OrgPage />
  },
  {
    path: 'OrgEdit/',
    element: <OrgEdit />
  },
  // you can add client-side-routes here, note that as we may be 
  // editing the same file there may be merge conflicts
  {
    path: 'UserPage1/',
    element: <UserPage1 />
  },
  {
    path: 'UserPage2/',
    element: <UserPage2 />
  },
  {
    path: 'OrgPage1/',
    element: <OrgPage1 />
  },
  {
    path: 'OrgPage2/',
    element: <OrgPage2 />
  },
  {
    path: 'jobs/',
    element: <Jobs />
  }
  ,
  {
    path: 'jobs/post/',
    element: <PostJobs />
  }
  ,
  {
    path: 'jobs/applicants/',
    element: <JobApplicants />
  },
  {
    path: 'connections/',
    element: <Connections />,
  },
  {
    path: 'connections/requests',
    element: <ConnectionRequests />
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
