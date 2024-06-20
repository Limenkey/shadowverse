import { Route, Routes } from 'react-router-dom';
import paths from './paths.tsx';

const Router = () => {
  return (
    <Routes>
      {paths.map(({ element, path }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
