import { ColorsProps } from './Colors.types'
import { useCallback } from 'react'
import * as Style from './Colors.style'

const Colors = ({ colors }: ColorsProps) => {
  const colorsArray: { key: string; value: string }[] = []
  let colorsMap: any // Using let, I accept suggestions to improve.

  const iterate = useCallback((obj: any, stack: any) => {
    for (const property in obj) {
      if (obj.hasOwnProperty(property)) {
        if (typeof obj[property] == 'object') {
          iterate(obj[property], stack + property)
        } else {
          const color = {
            key: `colors  ${property}  ${stack}`,
            value: obj[property]
          }
          colorsArray.push(color)
        }
      }
    }

    // Note: Next line added because we should not look to all values to prevent re-render loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTextColor = useCallback((bgColor: string) => {
    if (!bgColor) {
      return '#fff'
    }
    return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2
      ? '#000'
      : '#fff'
  }, [])

  if (!colors) {
    return (
      <div>
        <p>Invalid colors, please check colors param.</p>
      </div>
    )
  }

  iterate(colors, '')

  colorsMap = colorsArray.map(
    (color: { key: string; value: string }, index) => {
      const textColor = getTextColor(color.value)
      return (
        <div key={`color-${index}`}>
          <Style.Color color={color.value}>
            <Style.Description color={textColor}>{color.key}</Style.Description>
            <Style.Code color={textColor}>{color.value}</Style.Code>
          </Style.Color>
        </div>
      )
    }
  )

  return <Style.Wrapper data-testid="colors">{colorsMap}</Style.Wrapper>
}

export default Colors
