import React from 'react';
import './index.scss';

import Carousel from '.';

export default {
  title: 'Space/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
