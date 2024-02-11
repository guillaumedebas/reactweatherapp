import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDisplay from './components/MainDisplay/MainDisplay';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import HomePage from './pages/HomePage/HomePage';
import DetailedForecastPage from './pages/DetailedForecastPage/DetailedForecastPage';
import WeatherAlertsPage from './pages/WeatherAlertsPage/WeatherAlertsPage';


function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<MainDisplay content={<HomePage />} />} />
        <Route path="/DetailedForecastPage" element={<MainDisplay content={<DetailedForecastPage />} />} />
        <Route path="/WeatherAlertsPage" element={<MainDisplay content={<WeatherAlertsPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
