import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './Root';
import Quiz from './Quiz';
import Result from './Result';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { CheckUserAuth } from '../hooks/helpers'; // provide route protection



/**React routes */
const router = createBrowserRouter([
    {
        path: '/',
        // element: <CheckUserAuth><Root /></CheckUserAuth>
        element: <Root />
    },
    {
        path: '/quiz',
        element: <CheckUserAuth><Quiz /></CheckUserAuth> 
        // element: <Quiz /> 
    },
    {
        path: '/result',
        // element: <Result />
        element: <CheckUserAuth><Result /></CheckUserAuth>
    }
])

function App() {
  return (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
