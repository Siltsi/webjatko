import './App.css';
import LearningOutcome from './LearningOutcome.jsx';

export default function App() {
  const outcomes = [
    { id: 1, text: 'Projektin luominen' },
    { id: 2, text: 'JSX ja tyylit' },
    { id: 3, text: 'Omat komponentit' },
    { id: 4, text: 'Propsien käyttäminen' },
  ];
  return (
    <main className="page">
      <h1>Oppimissivu</h1>
      <p>Viikko 37: Reactin perusteet</p>
      <ul>
        <LearningOutcome id={outcomes[0].id} text={outcomes[0].text} />
        <LearningOutcome id={outcomes[1].id} text={outcomes[1].text} />
        <LearningOutcome id={outcomes[2].id} text={outcomes[2].text} />
        <LearningOutcome id={outcomes[3].id} text={outcomes[3].text} />
      </ul>
    </main>
  );
}