import * as S from './styles'

const Main = ({
  title,
  description
}: {
  title: string
  description: string
}) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      <p>{description}</p>
    </S.Container>
  )
}

export default Main
