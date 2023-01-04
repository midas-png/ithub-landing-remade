import { Route, Routes, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { MainPage } from 'pages';

export const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/ithub' element={<MainPage />} />
      <Route path='*' element={<Navigate to='/ithub' />} />
    </Routes>
  );
};
