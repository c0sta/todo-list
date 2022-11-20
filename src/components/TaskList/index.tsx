import { EmptyList, Task, ITask } from './components'
import { Container, Header, Info, InfoContainer, List, Tag } from './styles'

interface Props {
  tasks: ITask[]
}
export const TaskList = ({ tasks }: Props) => {
  const createdTasks = tasks.length
  const finishedTasks = tasks.filter(task => task.checked).length

  return (
    <Container>
      <Header>
        <InfoContainer>
          <Info color='blue'>Tarefas criadas</Info>
          <Tag>{createdTasks}</Tag>
        </InfoContainer>
        <InfoContainer>
          <Info color='purple'>Concluidas</Info>
          <Tag>{finishedTasks}</Tag>
        </InfoContainer>
      </Header>
      {tasks.length ? (
        <List>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              checked={task.checked}
              text={task.text}
            />
          ))}
        </List>
      ) : (
        <EmptyList />
      )}
    </Container>
  )
}
