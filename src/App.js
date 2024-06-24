import './App.css';

// Component
import TopBar from './components/topBar'
import HeroImage from './components/heroImage'
import List from './components/list'

export default function App() {
  return (
    <div className="App">
      <TopBar />
      <div style={{margin: '20px 0 20px 0'}}>
      <HeroImage />
      </div>
      <List />
    </div>
  )
}