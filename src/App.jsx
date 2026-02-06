import './App.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main className="container">
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  )
}

export default App
