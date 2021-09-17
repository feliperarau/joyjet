import React from 'react';
import './index.scss';
import Hero from '.';
import heroBg from '../../assets/img/hero-bg.jpg';

export default {
  title: 'Space/Hero',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'HEADLINE',
  description: 'Description...',
  background: heroBg,
  actionText: 'Action',
  actionHref: '/about',
  trending: {
    first: 'First Trending',
    second: 'Second Trending',
    third: 'Third Trending',
  },
};
