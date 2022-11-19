import { Container } from './styles'
import { ClipboardSVG } from '../../../../assets/Clipboard'

export const EmptyList = () => (
  <Container>
    <ClipboardSVG />
    <strong>Você ainda não tem tarefas cadastradas</strong>
    <p>Crie tarefas e organize seus itens a fazer</p>
  </Container>
)
