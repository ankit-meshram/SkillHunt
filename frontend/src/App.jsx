import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx/index.js';
import Home from './components/Home.jsx/index.js';
import Jobs from './components/Jobs.jsx/index.js';
import Browse from './components/Browse.jsx/index.js';
import Profile from './components/Profile.jsx/index.js';
import JobDescription from './components/JobDescription.jsx/index.js';
import Companies from './components/admin/Companies.jsx';
import CompanyCreate from './components/admin/CompanyCreate.jsx';
import CompanySetup from './components/admin/CompanySetup.jsx';
import AdminJobs from "./components/admin/AdminJobs.jsx";
import PostJob from './components/admin/PostJob.jsx';
import Applicants from './components/admin/Applicants.jsx';
import ProtectedRoute from './components/admin/ProtectedRoute.jsx';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  // admin ke liye yha se start hoga
  {
    path: "/admin/companies",
    element: <ProtectedRoute><Companies /></ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute><CompanyCreate /></ProtectedRoute>
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute><CompanySetup /></ProtectedRoute>
  },
  {
    path: "/admin/jobs",
    element: <ProtectedRoute><AdminJobs /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute><PostJob /></ProtectedRoute>
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute><Applicants /></ProtectedRoute>
  },

]);
function App() {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
