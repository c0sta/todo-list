import { useTodo } from '../../../../hooks'
import { CheckMark, Radio, Task as TaskStyled, Text, Thrash } from './styles'

export interface ITask {
  id: string
  checked: boolean
  text: string
}

type Props = ITask
export const Task = ({ id, checked, text }: Props) => {
  const { actions } = useTodo()

  const onDelete = () => actions.delete({ id })

  const onFinish = () => actions.finish({ id })

  return (
    <TaskStyled>
      <Radio
        type='radio'
        checked={checked}
        data-testid='radio'
        onChange={onFinish}
      />
      {checked && <CheckMark onClick={onFinish} />}

      <Text>{text}</Text>

      <Thrash onClick={onDelete} />
    </TaskStyled>
  )
}
