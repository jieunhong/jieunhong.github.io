import { Link, graphql } from 'gatsby';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Panel from '../components/Panel';
import React from 'react';
import SEO from '../components/SEO';
import get from 'lodash/get';
import { rhythm } from '../utils/typography';
import '../components/custom.css';

class BlogIndexTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.changeCategory = this.changeCategory.bind(this);
    this.state = {
      active: false,
    };
  }
  toggleClass(e) {
    document.getElementsByClassName('clicked')[0].classList.remove('clicked');
    e.target.className = 'clicked';
    const targetCategory = e.target.text;

    if (targetCategory != '전체') {
      document
        .querySelectorAll('.article')
        .forEach(item => item.classList.add('none'));
      document
        .querySelectorAll('.' + targetCategory)
        .forEach(item => item.classList.remove('none'));
    } else {
      document
        .querySelectorAll('.article')
        .forEach(item => item.classList.remove('none'));
    }
  }
  changeCategory() {
    document.getElementsByClassName('clicked')[0].classList.remove('clicked');
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const langKey = this.props.pageContext.langKey;
    const posts = get(this, 'props.data.allMarkdownRemark.edges');
    var categorys = ['전체'];

    posts.map(node => categorys.push(get(node, 'node.frontmatter.category')));
    categorys = Array.from(new Set(categorys));

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <aside>
          <Bio />
        </aside>
        <main>
          {langKey !== 'en' && langKey !== 'ru' && (
            <Panel>
              These articles have been{' '}
              <a
                href="https://github.com/gaearon/overreacted.io#contributing-translations"
                target="_blank"
                rel="noopener noreferrer"
              >
                translated by the community
              </a>
              .
            </Panel>
          )}
          <div
            style={{
              marginBottom: '-1rem',
              color: 'var(--textTitle)',
              display: 'flex',
            }}
          >
            {categorys.map(category => {
              let categoryClass = category == '전체' ? 'clicked' : '';
              return (
                <a
                  key={category}
                  className={categoryClass}
                  onClick={this.toggleClass}
                  style={{
                    padding: '0 15px',
                    border: '0.1rem solid',
                    borderRadius: '15px',
                    textAlign: 'center',
                    marginRight: '20px',
                  }}
                >
                  {category}
                </a>
              );
            })}
          </div>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug;
            const category =
              get(node, 'frontmatter.category') || node.fields.slug;
            return (
              <article key={node.fields.slug} class={category + ' article'}>
                <header>
                  <h3
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: rhythm(1),
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{ boxShadow: 'none' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small>
                    {formatPostDate(node.frontmatter.date, langKey)}
                    {` • ${formatReadingTime(node.timeToRead)}`}
                  </small>
                </header>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </article>
            );
          })}
        </main>
        <Footer />
      </Layout>
    );
  }
}

export default BlogIndexTemplate;

//filter: { frontmatter: { category: { eq: "개발" } }, fields: { langKey: { eq: $langKey } } }
export const pageQuery = graphql`
  query($langKey: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fields: { langKey: { eq: $langKey } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            langKey
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            category
          }
        }
      }
    }
  }
`;
