import { getComplianceScore, analysis, STAGE_ORDER } from '../data/utils.js'
import './ComplianceScore.css'

const SCORE_LABELS = { pass: 'Pass', partial: 'Partial', fail: 'Missing' }

const COLOR_MAP = {
  pass:    'var(--color-pass)',
  partial: 'var(--color-partial)',
  fail:    'var(--color-fail)',
}

export default function ComplianceScore() {
  const { passed, partial, total, avg } = getComplianceScore()

  return (
    <div className="card">
      <div className="compliance-score__header">
        <div>
          <p className="compliance-score__title">Compliance Score</p>
          <p className="compliance-score__number">
            {passed} <span>/ {total} stages passed</span>
          </p>
          {partial > 0 && (
            <p className="compliance-score__partial">{partial} partial</p>
          )}
        </div>
        <div className="compliance-score__avg">
          <span className="compliance-score__avg-number">{avg}</span>
          <span className="compliance-score__avg-label">/ 10 avg</span>
        </div>
      </div>

      <div className="compliance-score__stages">
        {STAGE_ORDER.map((key) => {
          const stage = analysis.complianceStages[key]
          const pct = (stage.numeric / 10) * 100
          return (
            <div key={key} className="compliance-score__stage">
              <div className="compliance-score__stage-top">
                <span className="compliance-score__stage-name">{stage.label}</span>
                <div className="compliance-score__stage-right">
                  <span className="compliance-score__stage-num">{stage.numeric}/10</span>
                  <span className={`badge badge--${stage.score}`}>
                    {SCORE_LABELS[stage.score]}
                  </span>
                </div>
              </div>
              <div className="compliance-score__bar-track">
                <div
                  className="compliance-score__bar-fill"
                  style={{
                    width: `${pct}%`,
                    background: COLOR_MAP[stage.score],
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
