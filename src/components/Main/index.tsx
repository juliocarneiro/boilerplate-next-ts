import * as S from './styles'
import { HEADER } from 'config'

const Main = () => (
  <S.Wrapper>
    <S.Title>{HEADER.title}</S.Title>
    <S.Description>{HEADER.description}</S.Description>
  </S.Wrapper>
)

export default Main
