import { Home } from './pages/Home'
import './global/reset.css'
import { TodoProvider } from './hooks'

const App = () => (
  <TodoProvider>
    <Home />
  </TodoProvider>
)

export default App
