import { Route, Routes} from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CounterPage } from './pages/CounterPage';
import { ModalPage } from './pages/ModalPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { QuizPage } from './pages/QuizPage';
import { UsersListPage } from './pages/UsersListPage';
import { CurrencyConverterPage } from './pages/CurrencyConverterPage';
// import './App.css';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          
          <Route index element={<HomePage/>}/>
          <Route path='counter' element={<CounterPage/>}/>
          <Route path='modal' element={<ModalPage/>}/>
          <Route path='quiz' element={<QuizPage/>}/>
          <Route path='users-list' element={<UsersListPage/>}/>
          {/* <Route path="users-list/reload" element={<NotFoundPage />}/> */}
          <Route path='currency-converter' element={<CurrencyConverterPage/>}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}
