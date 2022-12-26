import { useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import Positioner from '../components/layout/Positioner';
import SearchBar from '../components/main/SearchBar';

function Main() {
  useEffect(() => {
    document.title = 'Main page';
  }, []);

  return (
    <DefaultLayout>
      <Positioner className="py-[20px] sm:py-[50px]">
        <SearchBar />
        <section className='bg-[#f0f0f0] flex mt-[20px] sm:mt-[50px]'>
          
        </section>
      </Positioner>
    </DefaultLayout>
  );
}

export default Main;
