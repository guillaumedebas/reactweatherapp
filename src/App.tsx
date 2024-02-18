import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainDisplay from './components/MainDisplay/MainDisplay';
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';
import HomePage from './pages/HomePage/HomePage';
import DetailedForecastPage from './pages/DetailedForecastPage/DetailedForecastPage';
import WeatherAlertsPage from './pages/WeatherAlertsPage/WeatherAlertsPage';
import ProfileCard from './pages/ProfileCard/ProfileCard';
import img from '../src/assets/img/weathersun.webp'


function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<MainDisplay content={<HomePage />} />} />
        <Route path="/DetailedForecastPage" element={<MainDisplay content={<DetailedForecastPage />} />} />
        <Route path="/WeatherAlertsPage" element={<MainDisplay content={<WeatherAlertsPage />} />} />
        <Route path="/profilecard" element={<MainDisplay content={
          <ProfileCard
            name="Guillaume Debas"
            imageUrl={img}
            location="Arras, France"
            description="Front-end developer and more."
            githubUrl="https://github.com/guillaumedebas/"
            linkedinUrl="https://www.linkedin.com/in/guillaume-debas/"
            twitterUrl="https://twitter.com/guillaumedebas/"
            instagramUrl="https://www.instagram.com/guillaumedebas/"
          />
        } />} />
      </Routes>
    </Router>
  );
}

export default App;
