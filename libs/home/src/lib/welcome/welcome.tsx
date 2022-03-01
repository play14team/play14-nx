import React from 'react';
import './welcome.module.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  return (
    <div>
      <h1>#play14</h1>
      <h2>We believe in playfulness</h2>
    </div>
  );
}

export default Welcome;
