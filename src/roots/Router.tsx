import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Catched from '../pages/Catched';
import NotFound from '../pages/NotFound';

/**
 * Router
 * @date 2022. 12. 20. - 14:00:02
 *
 * @returns {JSX.Element}
 */
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/catched" element={<Catched />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
