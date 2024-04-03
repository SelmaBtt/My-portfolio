import { useState } from 'react'
import '../stylesheets/Root.css'
import Nav from './NavBar/Nav'
import WelcomeSection from './WelcomeSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <WelcomeSection />
    </>
  )
}

export default App
