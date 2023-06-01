import Hello from './Hello';

export default {
  title: 'components|basic/Hello', // 스토리북에서 보여질 그룹과 경로를 명시
  component: Hello, // 어떤 컴포넌트를 문서화 할지 명시
  tags: ['autodocs'],
  argTypes: {
    big: {
      options: [true, false],
      control: 'boolean',
    },
    name: { control: 'text' },
    onHello: { action: 'onHello' },
    onBye: { action: 'onBye' },
  },
  args: {
    // big: true,
    name: 'Storybook',
  },
};

export const standard = {
  args: {
    big: false,
    // name: 'Storybook',
    // onHello: action('onHello'),
    // onBye: action('onBye'),
  },
};
export const big = {
  args: {
    big: true,
    // name: 'Storybook',
    // onHello: action('onHello'),
    // onBye: action('onBye'),
  },
};
