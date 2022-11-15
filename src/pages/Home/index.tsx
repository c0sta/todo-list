import { CreateTask } from '../../components/CreateTask'
import { Header } from '../../components/Header'
import { TaskList } from '../../components/TaskList'
import { Container } from './styles'

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <CreateTask />
        <TaskList />
      </Container>
    </>
  )
}
