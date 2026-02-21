import CallStageSection from './CallStageSection.jsx'
import { STAGE_ORDER } from '../data/utils.js'
import './TranscriptPanel.css'

export default function TranscriptPanel() {
  return (
    <main className="transcript-panel">
      <p className="transcript-panel__header">Transcript &amp; Stage-by-Stage Analysis</p>
      {STAGE_ORDER.map((key) => (
        <CallStageSection key={key} stageKey={key} />
      ))}
    </main>
  )
}
