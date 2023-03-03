import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes/index.route';
import './styles/index.style.css';

function App() {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  );
}

export default App;
