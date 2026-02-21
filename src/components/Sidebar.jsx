import CallTypeCard from './CallTypeCard.jsx'
import ComplianceScore from './ComplianceScore.jsx'
import SalesInsights from './SalesInsights.jsx'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <CallTypeCard />
        <ComplianceScore />
        <SalesInsights />
      </div>
    </aside>
  )
}
