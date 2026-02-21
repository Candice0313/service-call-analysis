import { getUtterancesForStage, analysis } from '../data/utils.js'
import TranscriptLine from './TranscriptLine.jsx'
import './CallStageSection.css'

const SCORE_LABELS = { pass: 'Pass', partial: 'Partial', fail: 'Missing' }

export default function CallStageSection({ stageKey }) {
  const stage = analysis.complianceStages[stageKey]
  const utterances = getUtterancesForStage(stageKey)

  return (
    <section className="stage-section">
      <div className="stage-section__header">
        <h3 className="stage-section__title">{stage.label}</h3>
        <span className={`badge badge--${stage.score}`}>
          {SCORE_LABELS[stage.score]}
        </span>
      </div>

      <div className="stage-section__transcript">
        {utterances.length > 0
          ? utterances.map((u, i) => <TranscriptLine key={i} utterance={u} />)
          : <p className="stage-section__empty">No transcript lines mapped to this stage.</p>
        }
      </div>

      <div className={`stage-section__annotation stage-section__annotation--${stage.score}`}>
        {stage.commentary}
      </div>
    </section>
  )
}
