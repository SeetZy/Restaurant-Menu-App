/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/**
 * * Page/Component imports
 */
import Footer from './components/Footer.tsx'
import NavigationBar from './components/Navbar.tsx'

import ErrorPage from './views/Error.tsx'
import HomePage from './views/Home'
import AddMenuItemsPage from './views/AddItems'

function App() {
  return (
    <Router>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/add-menu-items" element={<AddMenuItemsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
