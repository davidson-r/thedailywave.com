import * as React from "react"
import { graphql } from "gatsby"
import { Layout, BreadCrumb, SocialShare, RelatedArticles } from "../../components/layout"
import SEO from "../../components/seo"

export default function BlogPostTemplate({
  data,
}) {
  const { markdownRemark, next, previous } = data
  const { frontmatter, html } = markdownRemark
  const {title, date}=frontmatter
  const {slug} = markdownRemark.fields
  return (

    <Layout>

      <BreadCrumb />

      <div className="main-container container" id="main-container">

        <div className="row">

          <div className="col-lg-8 blog__content mb-72">
            <div className="content-box">

              <article className="entry mb-0">

                <div className="single-post__entry-header entry__header">
                  {/* <a href="categories.html" className="entry__meta-category entry__meta-category--label entry__meta-category--green">Lifestyle</a> */}
                  <h1 className="single-post__entry-title">
                    {title}
                  </h1>

                  <div className="entry__meta-holder">
                    <ul className="entry__meta">
                      {/* <li className="entry__meta-author">
                        <span>by</span>
                        <a href="#">DeoThemes</a>
                      </li> */}
                      <li className="entry__meta-date">
                        {date}
                      </li>
                    </ul>

                    {/* <ul className="entry__meta">
                      <li className="entry__meta-views">
                        <i className="ui-eye"></i>
                        <span>1356</span>
                      </li>
                      <li className="entry__meta-comments">
                        <a href="#">
                          <i className="ui-chat-empty"></i>13
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="entry__img-holder">
                  {/* <img src="img/content/single/single_post_featured_img.jpg" alt="" className="entry__img"> */}
                </div>

                <div className="entry__article-wrap">

                  <SocialShare title={title} slug={slug}/>
                  <div className="entry__article">
                    <div
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  </div>
                </div>

                <nav className="entry-navigation">
                  <div className="clearfix">
                    {
                      next && <div className="entry-navigation--left">
                        <i className="ui-arrow-left"></i>
                        <span className="entry-navigation__label">Previous Post</span>
                        <div className="entry-navigation__link">
                          <a href={next.fields.slug} rel="next">{next.frontmatter.title}</a>
                        </div>
                      </div>
                    }
                    {
                      previous && <div className="entry-navigation--right">
                        <span className="entry-navigation__label">Next Post</span>
                        <i className="ui-arrow-right"></i>
                        <div className="entry-navigation__link">
                          <a href={previous.fields.slug} rel="prev">{previous.frontmatter.title}</a>
                        </div>
                      </div>
                    }


                  </div>
                </nav>

                {/* <RelatedArticles /> */}

              </article>


            </div>
          </div>

          <aside className="col-lg-4 sidebar sidebar--right">


            {/* <PopularPost /> */}

            <aside className="widget widget_mc4wp_form_widget">
              <h4 className="widget-title">Newsletter</h4>
              <p className="newsletter__text">
                <i className="ui-email newsletter__icon"></i>
                Subscribe for our daily news
              </p>
              <form className="mc4wp-form" method="post">
                <div className="mc4wp-form-fields">
                  <div className="form-group">
                    {/* <input type="email" name="EMAIL" placeholder="Your email" required=""> */}
                  </div>
                  <div className="form-group">
                    {/* <input type="submit" className="btn btn-lg btn-color" value="Sign Up"> */}
                  </div>
                </div>
              </form>
            </aside>

            {/* <SocialHangout /> */}


          </aside>


        </div>
      </div>
    </Layout>
  )
}


export const Head = ({ data }) => (
  <SEO description={data.markdownRemark.frontmatter.description}
    title={data.markdownRemark.frontmatter.title}
    twitterImage={data.markdownRemark.frontmatter.featuredImage.publicURL} />
)



export const pageQuery = graphql`
  query($id: String
    $previousPostId: String
    $nextPostId: String) {
    markdownRemark(id: { eq: $id }) {
      html
      fields{
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredImage {
          id
          publicURL
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`