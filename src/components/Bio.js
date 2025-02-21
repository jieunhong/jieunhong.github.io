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
        <a href="/profile" className="profile">
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
        </a>
        <p style={{ maxWidth: 310 }}>
          Personal blog by Jieun Hong.
          {/* <a href="http://bbubbu.me">홍지은</a>.  */}
          <br></br>Hello JIEUN World !
        </p>
      </div>
    );
  }
}

export default Bio;
