
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/components/layout'
import { ThemeProvider } from '@/context/theme-provider'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Layout>
            <Routes>
              <Route path="/" element={} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
