import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';

import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/job" element={<JobsPage />} />
      <Route path="/add-job" element={<AddJobPage />} />
      <Route path="/job/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>,
  ),
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
