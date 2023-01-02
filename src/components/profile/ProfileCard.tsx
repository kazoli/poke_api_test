import { tPokemonProfile } from '../../app/pokemon/pokemonTypes';
import { ReactComponent as PokeBall } from '../../utils/images/Pokeball.svg';
import { useAppDispatch } from '../../app/general/hooks';
import { pokemonCatch, pokemonRelease } from '../../app/pokemon/pokemonSlice';
import NoImage from '../../utils/images/no_image.png';
import ProfileCardSection from './ProfileCardSection';

/**
 * Type definition of properties of the component
 * @date 2023. 01. 02. - 16:46:32
 *
 * @typedef {tProps}
 */
type tProps = {
  profile: tPokemonProfile;
  catched: boolean;
};

/**
 * Profile card component for profile page of a Pokémon
 * @date 2023. 01. 02. - 16:46:32
 *
 * @prop {tPokemonProfile} profile Profile data of the Pokémon
 * @prop {boolean} catched Show the Pokémon is catched or not
 * @returns {JSX.Element}
 */
function ProfileCard(props: tProps) {
  const dispatch = useAppDispatch();
  const hoverShadow = props.catched
    ? 'hover:shadow-[0_0_1px_1px_#000,inset_0_0_10px_0_#b1dcf1]'
    : 'hover:shadow-[0_0_1px_1px_#000,inset_0_0_10px_0_#f6ce09]';

  const onClick = () => {
    dispatch(props.catched ? pokemonRelease(props.profile.name) : pokemonCatch(props.profile.name));
  };

  return (
    <div className="inline-block w-[100%] sm:w-[auto] bg-[#fcfcfc] min-w-[330px] shadow-[inset_0_0_10px_5px_#e2be09,0_0_5px_1px_#247eb2] p-[0_25px] rounded-[50px] text-center">
      <img
        className="h-[100px] m-[15px_auto_0_auto]"
        src={props.profile.imageUrl}
        alt={props.profile.name}
        onError={(e) => {
          e.currentTarget.onerror = null; // prevents looping
          e.currentTarget.src = NoImage; // loads no image
        }}
      />
      <section className="text-[2rem] m-[0_0_0_0]">{props.profile.name}</section>
      <ProfileCardSection label="Weight" data={`${props.profile.weight} kilograms`} />
      <ProfileCardSection label="Height" data={`${props.profile.height} centimeters`} />
      <ProfileCardSection
        label="Not hidden abilities"
        data={props.profile.notHiddenAbilities.map((ability, index) => (
          <div key={index}>{ability}</div>
        ))}
      />
      <button
        onClick={onClick}
        className={`group flex items-center gap-[5px] bg-[#fff] rounded-full p-[5px_10px] m-[25px_auto] transition-all duration-500 shadow-[0_0_1px_1px_#000] ${hoverShadow}`}
      >
        <PokeBall className="group-hover:rotate-[180deg] duration-500 w-[1.5rem] h-[1.5rem]" />
        <span className="uppercase text-[1.5rem]">{props.catched ? 'Release' : 'Catch it'}</span>
      </button>
    </div>
  );
}

export default ProfileCard;
