import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return <Routes>
    <Route path='/' element={<Home/>}>
      <Route path='' element={}/>
      <Route path='' element={}/>
      <Route path='' element={}/>
    </Route>
  </Routes>;
};
