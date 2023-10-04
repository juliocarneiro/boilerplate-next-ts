import { Meta, StoryObj } from '@storybook/react'

import Main from '.'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../theme/default'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = (args: {
  title: string
  description: string
}) => (
  <ThemeProvider theme={defaultTheme}>
    <Main {...args} />
  </ThemeProvider>
)

Default.args = {
  title: 'Boilerplate V3',
  description: 'Typescript, ReactJS, NextJS e Styled Components'
}
