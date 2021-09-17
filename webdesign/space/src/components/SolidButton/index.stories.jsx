import React from 'react';

import './index.scss';
import SolidButton from '.';

export default {
  title: 'Space/SolidButton',
  component: SolidButton,
};

const Template = (args) => <SolidButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click',
  href: '#',
};
Primary.argTypes = {
  label: { description: 'Button Label' },
  href: { description: 'Button href' },
};
