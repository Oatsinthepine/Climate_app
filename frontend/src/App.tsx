
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout'
import { ThemeProvider } from '@/context/theme-provider'
import WeatherDashbord from '@/pages/weather-dashbord'
import CityPage from './pages/city-page'



function App() {
  

  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashbord />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
