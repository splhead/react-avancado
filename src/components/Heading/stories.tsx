import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    lineColor: {
      options: ['primary', 'secondary']
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Most Popular',
  color: 'black',
  lineBottom: true,
  lineColor: 'primary',
  size: 'medium'
}
