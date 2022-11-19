import { EmptyList, Task, ITask } from './components'
import { Container, Header, Info, InfoContainer, List, Tag } from './styles'

interface Props {
  tasks: ITask[]
}
export const TaskList = ({ tasks }: Props) => {
  const createdTasks = tasks.length
  const finishedTasks = tasks.filter(task => task.checked).length

  if (!tasks.length) return <EmptyList />
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
      <List>
        {tasks.map(task => (
          <Task
            key={task.id}
            checked={task.checked}
            text={task.text}
            onDelete={() => console.log('deleting Task')}
          />
        ))}
      </List>
    </Container>
  )
}
