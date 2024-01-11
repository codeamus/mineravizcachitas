import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true,
  },
}
