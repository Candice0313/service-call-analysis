import Sidebar from './components/Sidebar.jsx'
import TranscriptPanel from './components/TranscriptPanel.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Service Call Analysis</h1>
        <span className="app__subtitle">
          39472 N Darner Dr — Technician Performance &amp; Sales Review
        </span>
      </header>

      <div className="app__body">
        <Sidebar />
        <TranscriptPanel />
      </div>
    </div>
  )
}
