import React from 'react';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  tags: ['autodocs'],
};

export const button = () => {
  return <Button>BUTTON</Button>;
};

button.story = {
  name: 'Default',
};

export const primaryButton = () => {
  return <Button>PRIMARY</Button>;
};
