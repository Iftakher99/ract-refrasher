import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './components/JobsPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/job" element={<JobsPage />} />
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