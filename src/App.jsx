import ComplianceScore from './components/ComplianceScore.jsx'
import SalesInsights from './components/SalesInsights.jsx'
import CallStageSection from './components/CallStageSection.jsx'
import { STAGE_ORDER } from './data/utils.js'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Service Call Analysis</h1>
        <p className="app__subtitle">
          Recording: 39472 N Darner Dr — Technician Performance &amp; Sales Review
        </p>
      </header>

      <div className="app__body">
        <aside className="app__sidebar">
          <ComplianceScore />
          <SalesInsights />
        </aside>

        <main>
          <p className="app__transcript-header">
            Transcript &amp; Stage-by-Stage Analysis
          </p>
          {STAGE_ORDER.map((key) => (
            <CallStageSection key={key} stageKey={key} />
          ))}
        </main>
      </div>
    </div>
  )
}
