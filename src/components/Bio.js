import React from 'react';
import profilePic from '../assets/profile-pic.jpeg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`jieunhong`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by <a href="http://bbubbu.me">홍지은</a>. I&nbsp;explain
          with words and code.
        </p>
      </div>
    );
  }
}

export default Bio;
