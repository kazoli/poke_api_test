import { useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';

function PokemonFinder() {
  useEffect(() => {
    document.title = 'Pokémon catcher';
  }, []);

  return (
    <DefaultLayout>
      <div className="m-[0_auto] p-[20px_10px] sm:p-[50px_10px] lg:max-w-[1200px]">
        <section className="flex rounded-[3rem] shadow-[inset_0_0_10px_5px_#e2be09,0_0_5px_1px_#247eb2] p-[15px]">
          <input
            type="text"
            autoComplete="off"
            placeholder="Type Pokémon's name"
            className="focus:outline-none flex-[1_1_auto] mx-[10px]"
          />
          <button className="flex items-center uppercase text-[#3c9ed8] font-bold rounded-[2rem] p-[0_10px] transition-all hover:shadow-[0_0_5px_1px_#247eb2] hover:text-[#ffffff] hover:bg-[#2b96d4]">
            Search
          </button>
        </section>
      </div>
    </DefaultLayout>
  );
}

export default PokemonFinder;
