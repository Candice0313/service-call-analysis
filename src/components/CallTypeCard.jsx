import { analysis } from '../data/utils.js'
import './CallTypeCard.css'

export default function CallTypeCard() {
  return (
    <div className="card call-type-card">
      <p className="call-type-card__label">Call Type Identification</p>
      <p className="call-type-card__name">{analysis.callType}</p>
      <p className="call-type-card__rationale">{analysis.callTypeRationale}</p>
    </div>
  )
}
