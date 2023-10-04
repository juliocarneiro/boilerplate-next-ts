import path from 'path'

const config = {
  staticDirs: ['../public'],
  stories: [
    '../src/**/*.stories.mdx',
    '../src/components/**/*.stories.@(ts|tsx|js|jsx|mdx)',
    '../src/pages/**/*.stories.@(ts|tsx|js|jsx|mdx)'
  ],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src/')
    }
    return config
  }
}
export default config
