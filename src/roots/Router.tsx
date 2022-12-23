import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonFinder from '../pages/PokemonFinder';
import PokemonProfile from '../pages/PokemonProfile';
import PokemonCatched from '../pages/PokemonCatched';
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
        <Route path="/" element={<PokemonFinder />} />
        <Route path="/profile" element={<PokemonProfile />} />
        <Route path="/catched" element={<PokemonCatched />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
