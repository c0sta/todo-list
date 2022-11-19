import { CheckMark, Radio, Task as TaskStyled, Text, Thrash } from './styles'

export interface ITask {
  id: string
  checked: boolean
  text: string
}

interface Props extends Omit<ITask, 'id'> {
  onDelete: () => void
}
export const Task = ({ checked, text, onDelete }: Props) => {
  return (
    <TaskStyled>
      <Radio type='radio' checked={checked} data-testid='radio' />
      {checked && <CheckMark />}

      <Text>{text}</Text>

      <Thrash onClick={onDelete} />
    </TaskStyled>
  )
}
