import React from 'react';
import './index.scss';
import Header from '.';
import logo from '../../assets/img/logo.png';
import MenuItems from '../../data/MenuItems';

export default {
  title: 'Space/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  logo: logo,
  forceSticky: true,
  previewMenu: MenuItems,
};
Default.argTypes = {
  logo: { description: 'Website Logo' },
  forceSticky: { description: 'Toggle Sticky Header' },
  previewMenu: { description: 'Header Menu Items' },
};
