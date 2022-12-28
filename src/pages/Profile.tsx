import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/general/hooks';
import { pokemonGetProfile } from '../app/pokemon/pokemonThunks';
import { pokemonResetProfile } from '../app/pokemon/pokemonSlice';
import DefaultLayout from '../components/layout/DefaultLayout';

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    document.title = 'Pokémon profile';
    return () => {
      dispatch(pokemonResetProfile());
    };
  }, [dispatch]);

  useEffect(() => {
    const url = new URLSearchParams(location.search).get('url');
    if (url) {
      dispatch(pokemonGetProfile(url));
    } else {
      navigate('/');
    }
  }, [dispatch, navigate, location.search]);

  return (
    <DefaultLayout>
      <div></div>
    </DefaultLayout>
  );
}

export default Profile;
