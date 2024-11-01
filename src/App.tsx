import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConsolePage } from './pages/ConsolePage';
import { useVisibility } from './context/VisibilityContext';
import HomePage from './pages/HomePage';
import ProviderPage from './pages/ProviderPage';
import './App.scss';

function App() {
  const { showConsolePage } = useVisibility();
  return (
    <Router>
      <div data-component="App">
        <Routes>
          <Route
            path="/"
            element={!showConsolePage ? <HomePage /> : <ConsolePage />}
          />
          <Route path="/provider" element={<ProviderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
