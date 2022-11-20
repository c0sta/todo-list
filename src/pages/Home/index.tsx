import { Header, CreateTask, TaskList } from '../../components'
import { useTodo } from '../../hooks'
import { Container } from './styles'

export const Home = () => {
  const { tasks } = useTodo()
  return (
    <>
      <Header />
      <Container>
        <CreateTask />
        <TaskList tasks={tasks} />
      </Container>
    </>
  )
}
