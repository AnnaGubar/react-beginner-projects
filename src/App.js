import { Route, Routes} from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CounterPage } from './pages/CounterPage';
import { ModalPage } from './pages/ModalPage';
import { NotFoundPage } from './pages/NotFoundPage';
// import './App.css';

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          
          <Route index element={<HomePage/>}/>
          <Route path='counter' element={<CounterPage/>}/>
          <Route path='modal' element={<ModalPage/>}/>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

