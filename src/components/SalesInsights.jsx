import { analysis } from '../data/utils.js'
import './SalesInsights.css'

export default function SalesInsights() {
  return (
    <div className="card">
      <p className="sales-insights__title">Sales Insights</p>
      <ul className="sales-insights__list">
        {analysis.salesInsights.map((insight, i) => (
          <li key={i} className="sales-insights__item">
            <span className="sales-insights__icon">
              {insight.type === 'missed' ? '⚠️' : '✅'}
            </span>
            <div className="sales-insights__text">
              <span className={`sales-insights__label sales-insights__label--${insight.type}`}>
                {insight.type === 'missed' ? 'Missed Opportunity' : 'Well Done'}
              </span>
              {insight.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
