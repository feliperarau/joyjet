import React from 'react';
import './index.scss';

import AboutUs from '.';
import aboutImage from '../../assets/img/satellite-2.jpg';

export default {
  title: 'Space/AboutUs',
  component: AboutUs,
};

const Template = (args) => <AboutUs {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'About Title',
  text:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...',
  thumbnail: aboutImage,
};
Default.argTypes = {
  title: { description: 'About Us Title' },
  text: { description: 'About Us Text' },
  thumbnail: { description: 'About Us Thumbnail URL' },
};
