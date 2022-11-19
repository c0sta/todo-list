import { Header, CreateTask, TaskList } from '../../components'
import { Container } from './styles'

export const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <CreateTask />
        <TaskList tasks={[]} />
      </Container>
    </>
  )
}
