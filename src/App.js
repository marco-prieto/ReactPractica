import './App.css';
import './Styles/styles.scss'
import React from 'react'
import AppRoutes from './AppRoutes'
import {Provider} from 'react-redux'
import store from './redux/store'
import { getUnidadesList } from './redux/actionCreators';

store.dispatch(getUnidadesList())
function App() {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  )
}

export default App;
