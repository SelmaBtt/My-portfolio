import { useState } from 'react'
import '../stylesheets/Root.css'
import Nav from './NavBar/Nav'
import WelcomeSection from './WelcomeSection'
import styled from '../stylesheets/App.module.css'
import SmileIcon from './SmileIcon'
import SecondSection from './Second_section/SecondSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styled.appContainer}>
      <Nav />
      <WelcomeSection />
      <SmileIcon />
      <SecondSection />
    </div>
  )
}

export default App
