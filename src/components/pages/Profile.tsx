import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/general/hooks';
import { pokemonGetProfile } from '../../app/pokemon/pokemonThunks';
import { pokemonResetProfile } from '../../app/pokemon/pokemonSlice';
import { arrayIncludes } from '../../app/general/useful';
import DefaultLayout from '../layout/DefaultLayout';
import ProfileCard from '../profile/ProfileCard';

/**
 * Profile page of a Pokémon
 * @date 2023. 01. 02. - 16:04:33
 *
 * @returns {JSX.Element}
 */
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

  useEffect(() => {
    if (pokemon.status === 'failed') {
      navigate('/');
    }
  }, [dispatch, navigate, pokemon.status]);

  return (
    <DefaultLayout loading={pokemon.status === 'loading'}>
      <div className="flex flex-wrap justify-center">
        <div className="w-[100%] text-center mb-[20px]">
          <Link className="text-[#0000ff] hover:underline" to="\">
            Back to pokemon list
          </Link>
        </div>
        {pokemon.profile.name && (
          <ProfileCard
            profile={pokemon.profile}
            catched={arrayIncludes(pokemon.catched, pokemon.profile.name)}
          />
        )}
      </div>
    </DefaultLayout>
  );
}

export default Profile;
