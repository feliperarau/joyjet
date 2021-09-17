import React from 'react';
import './index.scss';
import TrendingBar from '.';

export default {
  title: 'Space/TrendingBar',
  component: TrendingBar,
};

const Template = (args) => <TrendingBar {...args} />;

export const Default = Template.bind({});

Default.args = {
  first: 'First Trending',
  second: 'Second Trending',
  third: 'Third Trending',
};
