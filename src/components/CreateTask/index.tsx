import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import { Button, Container, Input } from './styles'
import { useTodo } from '../../hooks'

export const CreateTask = () => {
  const [taskText, setTaskText] = useState<string>('')
  const { actions } = useTodo()

  const handleCreate = () => {
    if (!taskText.length) return

    actions.create({
      text: taskText,
      checked: false
    })
    setTaskText('')
  }

  return (
    <Container>
      <Input
        value={taskText}
        placeholder='Adicione uma nova tarefa'
        onChange={e => setTaskText(e.target.value)}
      />
      <Button onClick={handleCreate}>
        Criar <AiOutlinePlusCircle />
      </Button>
    </Container>
  )
}
