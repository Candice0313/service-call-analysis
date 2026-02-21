import { getComplianceScore, analysis, STAGE_ORDER } from '../data/utils.js'
import './ComplianceScore.css'

const SCORE_LABELS = { pass: 'Pass', partial: 'Partial', fail: 'Missing' }

export default function ComplianceScore() {
  const { passed, partial, total } = getComplianceScore()

  return (
    <div className="card">
      <div className="compliance-score__header">
        <div>
          <p className="compliance-score__title">Compliance Score</p>
          <p className="compliance-score__number">
            {passed} <span>/ {total} stages passed</span>
          </p>
          {partial > 0 && (
            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: 4 }}>
              {partial} partial
            </p>
          )}
        </div>
      </div>

      <div className="compliance-score__stages">
        {STAGE_ORDER.map((key) => {
          const stage = analysis.complianceStages[key]
          return (
            <div key={key} className="compliance-score__stage">
              <span>{stage.label}</span>
              <span className={`badge badge--${stage.score}`}>
                {SCORE_LABELS[stage.score]}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
