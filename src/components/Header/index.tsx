import { Container, Logo } from './styles'
import { RocketSvg } from '../../assets/RocketSvg'

export const Header = () => {
  return (
    <Container>
      <Logo>
        <RocketSvg aria-label='Ícone de um foguete apontando para cima na cor azul e roxo.' />
        <h1 aria-label='Texto task list, onde task está escrito na cor azul e list na cor roxo.'>
          task <span>list</span>
        </h1>
      </Logo>
    </Container>
  )
}
