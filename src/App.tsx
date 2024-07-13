import './App.css'
import TaskProvider from './hooks/Task'
import { Main } from './pages/Main'
function App() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  )
}

export default App
