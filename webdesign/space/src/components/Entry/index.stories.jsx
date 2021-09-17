import React from 'react';
import './index.scss';
import Entry from '.';
import thumbnail from '../../assets/img/satellite-1.jpg';

export default {
  title: 'Space/Entry',
  component: Entry,
};

const Template = (args) => {
  return (
    <>
      <div
        className="col-md-3"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Entry {...args} />
      </div>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Entry Title',
  excerpt:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa...',
  image: thumbnail,
};
Default.argTypes = {
  title: { description: 'Entry Title' },
  excerpt: { description: 'Entry Excerpt' },
  image: { description: 'Entry Thumbnail URL' },
};
