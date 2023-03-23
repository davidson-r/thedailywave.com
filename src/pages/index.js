import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from "../components/layout"
import SEO from "../components/seo"


const HomePage = ({data}) => {
  const {nodes}= data.allMarkdownRemark
  return <Layout>
      <div className="main-container container pt-24" id="main-container">

        <div className="row">

          <div className="col-lg-8 blog__content">

            <section className="section tab-post mb-16">
              <div className="title-wrap title-wrap--line">
                <h3 className="section-title">Latest News</h3>
              </div>
              <div className="row card-row">
                {
                  nodes.map((news,i)=><NewsCard news={news} key={i} />)
                }

                  </div>

            </section>
          </div>
        </div>
      </div>

    </Layout>
}


const NewsCard = ({news}) => {
  const {slug} = news.fields
  const {category, date, description,location,title}=news.frontmatter
  const {publicURL} = news.frontmatter.featuredImage
  return <div className="col-md-6">
    <article className="entry card">
      <div className="entry__img-holder card__img-holder">
        <a href={slug}>
          <div className="thumb-container thumb-70">
            <img src={publicURL} className="entry__img lazyload" alt="" />
          </div>
        </a>
        <a href="#" className="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet">{category}</a>
      </div>

      <div className="entry__body card__body">
        <div className="entry__header">

          <h2 className="entry__title">
            <a href={slug}>{title}</a>
          </h2>
          <ul className="entry__meta">
            {/* <li className="entry__meta-author">
              <span>by</span>
              <a href="#">DeoThemes</a>
            </li> */}
            <li className="entry__meta-date">
              {date}
            </li>
          </ul>
        </div>
        <div className="entry__excerpt">
          <p>{description.split(' ').slice(0,10).join(' ')} ...</p>
        </div>
      </div>
    </article>
  </div>
}

export const Head = ({ data }) => (
  <SEO description={data.markdownRemark.frontmatter.description}
    title={data.markdownRemark.frontmatter.title}
    twitterImage={data.markdownRemark.frontmatter.featuredImage.publicURL} />
)

export const query = graphql`
query HomePageQuery {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        category
        location
        title
        featuredImage {
          publicURL
        }
      }
    }
  }
}
`

export default HomePage
