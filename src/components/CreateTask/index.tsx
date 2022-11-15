import { Button, Container, Input } from './styles'
import { AiOutlinePlusCircle } from 'react-icons/ai'
export const CreateTask = () => {
  return (
    <Container>
      <Input placeholder='Adicione uma nova tarefa' />
      <Button>
        Criar <AiOutlinePlusCircle />
      </Button>
    </Container>
  )
}
