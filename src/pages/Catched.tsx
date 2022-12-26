import { useEffect } from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';

function Catched() {
  useEffect(() => {
    document.title = 'My catched Pokémons';
  }, []);

  return (
    <DefaultLayout>
      <div></div>
    </DefaultLayout>
  );
}

export default Catched;
