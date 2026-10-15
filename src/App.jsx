import { useState } from 'react'
import './App.css'

const principles = [
  {
    id: 'confidencialidad',
    letter: 'C',
    number: '01',
    name: 'Confidencialidad',
    short: 'Solo accede quien tiene permiso.',
    color: 'violet',
    icon: '◉',
    explanation:
      'Protege la información frente a lecturas o divulgaciones no autorizadas. La meta es que los datos lleguen únicamente a las personas, procesos o sistemas que deben conocerlos.',
    example:
      'Un expediente médico cifrado que solo puede abrir el paciente y el personal autorizado.',
    tools: ['Cifrado', 'Contraseñas robustas', 'Control de acceso', 'MFA'],
  },
  {
    id: 'integridad',
    letter: 'I',
    number: '02',
    name: 'Integridad',
    short: 'La información sigue siendo correcta.',
    color: 'cyan',
    icon: '✦',
    explanation:
      'Asegura que los datos no sean alterados, borrados o manipulados sin autorización. También permite detectar si algo cambió desde que se creó o envió.',
    example:
      'Una transferencia bancaria cuyo importe no puede modificarse durante el envío.',
    tools: ['Hash', 'Firmas digitales', 'Control de versiones', 'Registros de auditoría'],
  },
  {
    id: 'disponibilidad',
    letter: 'D',
    number: '03',
    name: 'Disponibilidad',
    short: 'El servicio está cuando se necesita.',
    color: 'orange',
    icon: '↗',
    explanation:
      'Garantiza que la información y los servicios estén accesibles para usuarios autorizados cuando hagan falta. No basta con proteger un sistema: también debe poder funcionar.',
    example:
      'Una plataforma de clases que permanece operativa durante un examen en línea.',
    tools: ['Copias de seguridad', 'Redundancia', 'Monitoreo', 'Planes de recuperación'],
  },
]

const situations = [
  {
    question: 'Alguien intercepta un mensaje privado y puede leerlo.',
    answer: 'confidencialidad',
    feedback: 'El problema principal es la exposición de información a una persona no autorizada.',
  },
  {
    question: 'Un atacante cambia la calificación guardada en una plataforma.',
    answer: 'integridad',
    feedback: 'El dato dejó de ser confiable porque fue modificado sin autorización.',
  },
  {
    question: 'Un servidor se cae y nadie puede consultar sus datos.',
    answer: 'disponibilidad',
    feedback: 'La información puede estar protegida, pero el servicio no está accesible.',
  },
]

function App() {
  const [selectedId, setSelectedId] = useState('confidencialidad')
  const [situationIndex, setSituationIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const selected = principles.find((principle) => principle.id === selectedId)
  const situation = situations[situationIndex]
  const isCorrect = selectedAnswer === situation.answer

  function chooseAnswer(answer) {
    setSelectedAnswer(answer)
  }

  function nextSituation() {
    setSituationIndex((index) => (index + 1) % situations.length)
    setSelectedAnswer(null)
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Inicio de la infografía">
          <span className="brand-mark">CIA</span>
          <span>seguridad esencial</span>
        </a>
        <span className="topic-tag">INFOGRAFÍA · 03 PRINCIPIOS</span>
      </header>

      <section className="hero-section" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Fundamentos de ciberseguridad</p>
          <h1>La tríada que mantiene segura la información.</h1>
          <p className="hero-text">
            Confidencialidad, Integridad y Disponibilidad: tres objetivos que ayudan a
            diseñar sistemas confiables y a entender qué falla cuando ocurre un incidente.
          </p>
          <a className="scroll-link" href="#explorar">
            Explorar los principios <span>↓</span>
          </a>
        </div>
        <div className="triad-orbit" aria-label="Diagrama de la tríada de seguridad">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core">
            <span>SEGURIDAD</span>
            <strong>CIA</strong>
            <small>equilibrio</small>
          </div>
          <span className="orbit-label label-c">C</span>
          <span className="orbit-label label-i">I</span>
          <span className="orbit-label label-d">D</span>
        </div>
      </section>

      <section className="explore-section" id="explorar">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Haz clic para descubrir</p>
            <h2>Cada principio cumple una misión.</h2>
          </div>
          <p className="section-note">Selecciona una tarjeta para ver el detalle.</p>
        </div>

        <div className="principle-grid">
          {principles.map((principle) => (
            <button
              className={`principle-card ${principle.color} ${
                selectedId === principle.id ? 'active' : ''
              }`}
              key={principle.id}
              type="button"
              onClick={() => setSelectedId(principle.id)}
              aria-pressed={selectedId === principle.id}
            >
              <span className="card-topline">
                <span>{principle.number}</span>
                <span className="card-icon">{principle.icon}</span>
              </span>
              <span className="card-letter">{principle.letter}</span>
              <span className="card-name">{principle.name}</span>
              <span className="card-short">{principle.short}</span>
              <span className="card-action">
                {selectedId === principle.id ? 'Viendo detalle' : 'Ver detalle'} <span>↗</span>
              </span>
            </button>
          ))}
        </div>

        <article className={`detail-panel ${selected.color}`} aria-live="polite">
          <div className="detail-badge">{selected.letter}</div>
          <div className="detail-content">
            <p className="eyebrow">Principio seleccionado</p>
            <h3>{selected.name}</h3>
            <p>{selected.explanation}</p>
            <div className="detail-example">
              <span className="example-label">EN LA PRÁCTICA</span>
              <span>{selected.example}</span>
            </div>
          </div>
          <div className="tools">
            <span className="tools-label">Se refuerza con</span>
            <div className="tool-list">
              {selected.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="challenge-section">
        <div className="challenge-intro">
          <p className="eyebrow">Comprueba lo aprendido</p>
          <h2>¿Qué principio está en riesgo?</h2>
          <p>Lee la situación y elige la respuesta que mejor describe el problema.</p>
          <span className="challenge-count">
            CASO {String(situationIndex + 1).padStart(2, '0')} / {String(situations.length).padStart(2, '0')}
          </span>
        </div>
        <div className="challenge-card">
          <p className="question">{situation.question}</p>
          <div className="answer-list">
            {principles.map((principle) => (
              <button
                className={`answer-button ${
                  selectedAnswer === principle.id
                    ? principle.id === situation.answer
                      ? 'correct'
                      : 'wrong'
                    : ''
                }`}
                key={principle.id}
                type="button"
                onClick={() => chooseAnswer(principle.id)}
              >
                <span>{principle.letter}</span>
                {principle.name}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div className={`feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`}>
              <strong>{isCorrect ? '¡Exacto!' : 'Casi, revisa la idea.'}</strong>
              <span>{isCorrect ? situation.feedback : 'Piensa en qué propiedad se ve afectada directamente.'}</span>
              <button type="button" onClick={nextSituation}>
                Siguiente caso →
              </button>
            </div>
          )}
        </div>
      </section>

      <footer>
        <span>La seguridad es un proceso, no un producto.</span>
        <span>info_rodger · 2026</span>
      </footer>
    </main>
  )
}

export default App
