import * as S from './Main.styles'
import { HEADER } from 'theme/defaultTheme'

const Main = () => (
  <S.Wrapper>
    <S.Title>{HEADER.title}</S.Title>
    <S.Description>{HEADER.description}</S.Description>
  </S.Wrapper>
)

export default Main
