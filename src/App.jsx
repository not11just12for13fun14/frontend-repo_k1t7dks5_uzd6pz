import { useState } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'

function App() {
  const [token, setToken] = useState('')

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      {!token ? (
        <>
          <Features />
          <Auth onAuthed={setToken} />
        </>
      ) : (
        <Dashboard token={token} />
      )}
      <footer className="bg-black/90 text-white/60 text-sm py-10">
        <div className="container mx-auto px-6">
          Built with love • Super App Preview
        </div>
      </footer>
    </div>
  )
}

export default App
