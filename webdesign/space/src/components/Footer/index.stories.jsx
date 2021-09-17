import React from 'react';
import './index.scss';
import Footer from '.';

export default {
  title: 'Space/Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
  copyrightText: 'Footer Copyright Text',
};
