import transcriptData from './transcript.json'
import { analysis, STAGE_ORDER, SPEAKERS } from './analysis.js'

export { analysis, STAGE_ORDER, SPEAKERS }

export function getUtterancesForStage(stageKey) {
  const boundaries = analysis.segmentBoundaries[stageKey]
  if (!boundaries || !transcriptData.utterances) return []
  return transcriptData.utterances.filter(
    (u) => u.start >= boundaries.start && u.start < boundaries.end
  )
}

export function formatTimestamp(ms) {
  const totalSeconds = Math.floor(ms / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function getComplianceScore() {
  const stages = Object.values(analysis.complianceStages)
  const passed = stages.filter((s) => s.score === 'pass').length
  const partial = stages.filter((s) => s.score === 'partial').length
  const avg = stages.reduce((sum, s) => sum + s.numeric, 0) / stages.length
  return {
    passed,
    partial,
    failed: stages.length - passed - partial,
    total: stages.length,
    avg: Math.round(avg * 10) / 10,
  }
}

export function getSpeakerLabel(speaker) {
  return speaker === SPEAKERS.technician ? 'Technician' : 'Customer'
}
