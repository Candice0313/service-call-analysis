import { formatTimestamp, getSpeakerLabel, SPEAKERS } from '../data/utils.js'
import './TranscriptLine.css'

export default function TranscriptLine({ utterance }) {
  const isTech = utterance.speaker === SPEAKERS.technician
  return (
    <div className="transcript-line">
      <span
        className={`transcript-line__speaker ${!isTech ? 'transcript-line__speaker--customer' : ''}`}
      >
        {getSpeakerLabel(utterance.speaker)}
      </span>
      <span className="transcript-line__time">
        {formatTimestamp(utterance.start)}
      </span>
      <span className="transcript-line__text">{utterance.text}</span>
    </div>
  )
}
