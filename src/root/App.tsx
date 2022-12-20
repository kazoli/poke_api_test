import { Provider } from 'react-redux';
import { store } from '../app/general/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/index.css';
import JumpTop from '../components/general/JumpTop';
import Router from './Router';

/**
 * Main app file that import router, jump top and toast container
 * @date 2022. 12. 20. - 13:59:37
 *
 * @returns {JSX.Element}
 */
function App() {
  return (
    <Provider store={store}>
      <Router />
      <JumpTop />
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}

export default App;
