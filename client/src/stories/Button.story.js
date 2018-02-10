import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import loremIpsum from 'lorem-ipsum';

const stories = storiesOf('Button', module);

stories.add('default', () =>
    <Button onClick={action('clicked')}>OK</Button>
);