import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import MainPage from './pages/mainPage';
import OptionPage from './pages/optionPage';
import ReviewPage from './pages/reviewPage';
import StartPage from './pages/startPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<StartPage />} />
            <Route path="/option" element={<OptionPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/review" element={<ReviewPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
