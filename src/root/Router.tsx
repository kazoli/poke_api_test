import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonFinder from '../pages/PokemonFinder';
import PokemonCard from '../pages/PokemonCard';
import NotFound from '../pages/NotFound';

/**
 * Description placeholder
 * @date 2022. 12. 20. - 14:00:02
 *
 * @returns {JSX.Element}
 */
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonFinder />} />
        <Route path="/history" element={<PokemonCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
