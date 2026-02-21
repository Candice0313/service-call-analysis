import { AssemblyAI } from 'assemblyai'
import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const apiKey = process.env.ASSEMBLYAI_API_KEY
if (!apiKey) {
  console.error('ERROR: Set ASSEMBLYAI_API_KEY env var before running.')
  process.exit(1)
}

const client = new AssemblyAI({ apiKey })

const audioPath = resolve(__dirname, '../../39472_N_Darner_Dr_2.m4a')
const outputPath = resolve(__dirname, '../src/data/transcript.json')

console.log('Uploading audio file...')
const uploadUrl = await client.files.upload(audioPath)
console.log('Upload complete:', uploadUrl)

console.log('Requesting transcription with speaker diarization...')
const transcript = await client.transcripts.transcribe({
  audio_url: uploadUrl,
  speech_models: ['universal-2'],
  speaker_labels: true,
  speakers_expected: 2,
})

if (transcript.status === 'error') {
  console.error('Transcription failed:', transcript.error)
  process.exit(1)
}

console.log('Transcription complete. Saving...')
mkdirSync(resolve(__dirname, '../src/data'), { recursive: true })

const output = {
  id: transcript.id,
  audio_duration: transcript.audio_duration,
  text: transcript.text,
  utterances: transcript.utterances,
  words: transcript.words,
}

writeFileSync(outputPath, JSON.stringify(output, null, 2))
console.log('Saved to', outputPath)
console.log(`Total duration: ${Math.round(transcript.audio_duration)}s`)
console.log(`Utterances: ${transcript.utterances?.length}`)
