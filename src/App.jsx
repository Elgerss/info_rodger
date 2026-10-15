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

const realCases = [
  {
    id: 'equifax',
    principle: 'confidencialidad',
    year: '2017',
    title: 'Equifax: datos personales expuestos',
    summary:
      'Una vulnerabilidad sin corregir permitió acceder a información de millones de personas, incluidos nombres, fechas de nacimiento y números de seguridad social.',
    impact: 'La información privada quedó en manos no autorizadas.',
    lesson: 'Actualizar sistemas y limitar los permisos reduce el alcance de una filtración.',
  },
  {
    id: 'solarwinds',
    principle: 'integridad',
    year: '2020',
    title: 'SolarWinds: software alterado',
    summary:
      'Atacantes comprometieron el proceso de distribución y agregaron código malicioso a una actualización legítima de Orion.',
    impact: 'Los usuarios recibieron un software que ya no era íntegro ni confiable.',
    lesson: 'Firmar, verificar y auditar el software ayuda a detectar cambios no autorizados.',
  },
  {
    id: 'wannacry',
    principle: 'disponibilidad',
    year: '2017',
    title: 'WannaCry: servicios interrumpidos',
    summary:
      'El ransomware afectó equipos del sistema sanitario británico (NHS), provocando cancelaciones y dificultades para acceder a servicios.',
    impact: 'Sistemas y archivos necesarios dejaron de estar disponibles a tiempo.',
    lesson: 'Las copias de seguridad, los parches y un plan de recuperación mantienen la operación.',
  },
]

function App() {
  const [selectedId, setSelectedId] = useState('confidencialidad')
  const [selectedCaseId, setSelectedCaseId] = useState('equifax')
  const [situationIndex, setSituationIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const selected = principles.find((principle) => principle.id === selectedId)
  const selectedCase = realCases.find((incident) => incident.id === selectedCaseId)
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

      <section className="cases-section" id="casos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">La teoría en el mundo real</p>
            <h2>Cuando un principio falla, se nota.</h2>
          </div>
          <p className="section-note">Explora un caso por cada principio.</p>
        </div>
        <div className="case-layout">
          <div className="case-list">
            {realCases.map((incident) => {
              const principle = principles.find((item) => item.id === incident.principle)
              return (
                <button
                  className={`case-tab ${principle.color} ${
                    selectedCaseId === incident.id ? 'active' : ''
                  }`}
                  key={incident.id}
                  type="button"
                  onClick={() => setSelectedCaseId(incident.id)}
                  aria-pressed={selectedCaseId === incident.id}
                >
                  <span className="case-tab-letter">{principle.letter}</span>
                  <span>
                    <strong>{principle.name}</strong>
                    <small>{incident.year} · {incident.title.split(':')[0]}</small>
                  </span>
                  <span className="case-tab-arrow">↗</span>
                </button>
              )
            })}
          </div>
          <article className={`real-case ${principles.find((item) => item.id === selectedCase.principle).color}`}>
            <div className="case-visual" aria-hidden="true">
              <span className="case-visual-grid" />
              <strong>{selectedCase.year}</strong>
              <span>CASO REAL</span>
            </div>
            <div className="case-content">
              <p className="eyebrow">Caso destacado</p>
              <h3>{selectedCase.title}</h3>
              <p>{selectedCase.summary}</p>
              <div className="case-facts">
                <div>
                  <span className="example-label">QUÉ PASÓ</span>
                  <strong>{selectedCase.impact}</strong>
                </div>
                <div>
                  <span className="example-label">QUÉ APRENDEMOS</span>
                  <strong>{selectedCase.lesson}</strong>
                </div>
              </div>
            </div>
          </article>
        </div>
        <p className="case-note">
          Nota: los incidentes reales suelen afectar varios principios a la vez; aquí se destaca el objetivo de seguridad más visible en cada caso.
        </p>
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
        <div className="footer-meta">
          <span>info_rodger · 2026</span>
          <a
            className="github-link"
            href="https://github.com/Elgerss"
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar el GitHub de Elgerss"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.55 1.06 1.55 1.06.9 1.58 2.35 1.12 2.93.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.24 9.24 0 0 1 12 7.15c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.54c0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
            </svg>
            <span>@Elgerss</span>
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
