import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          {/* <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a> */}
        </div>
        <a href="javascript:alert('막아둠..');">
          {/* <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          github
        </a>{' '}
        &bull;{' '}
        {
          <a href="javascript:alert('막아둠..');">
            {/* <a href="http://.me" target="_blank" rel="noopener noreferrer"></a> */}
            portfolio
          </a>
        }
      </footer>
    );
  }
}

export default Footer;
