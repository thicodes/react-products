import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import List from '../components/List';
import ListItem from '../components/ListItem';
import loremIpsum from 'lorem-ipsum';

const stories = storiesOf('List', module);

stories.add('default', () =>
  <List>
    <ListItem onClick={action('clicked')}>{loremIpsum()}</ListItem>
    <ListItem onClick={action('clicked')}>{loremIpsum()}</ListItem>
    <ListItem onClick={action('clicked')}>{loremIpsum()}</ListItem>
  </List>
);