import * as React from "react"


const Layout = ({ children }) => {
  const [toggle, setToggle] = React.useState(false)

  return <body className="bg-light single-post style-default style-rounded">
    {/* <Loader/> */}
    <div className={toggle ? "content-overlay--is-visible" : "content-overlay"}
      onClick={() => setToggle(false)}
    ></div>
    <Header toggle={toggle} setToggle={setToggle} />
    <main className="main oh" id="main">
      {/* <TopBar /> */}

      <NavBar toggle={toggle} setToggle={setToggle} />

      {children}

      <Footer />

      <div id="back-to-top">
        <a href="#top" aria-label="Go to top"><i className="ui-arrow-up"></i></a>
      </div>

    </main>
    {/* <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/easing.min.js"></script>
  <script src="js/owl-carousel.min.js"></script>
  <script src="js/flickity.pkgd.min.js"></script>
  <script src="js/twitterFetcher_min.js"></script>
  <script src="js/jquery.sticky-kit.min.js"></script>
  <script src="js/jquery.newsTicker.min.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/modernizr.min.js"></script>
  <script src="js/scripts.js"></script> */}

  </body>

}




const Header = ({ toggle, setToggle }) => {


  return <header className={toggle ? "sidenav--is-open" : "sidenav"} id="sidenav">


    <div className="sidenav__close">
      <button className="sidenav__close-button" id="sidenav__close-button" aria-label="close sidenav"
        onClick={() => setToggle(true)}
      >
        <i className="ui-close sidenav__close-icon"></i>
      </button>
    </div>


    <nav className="sidenav__menu-container">
      <ul className="sidenav__menu" role="menubar">
        <li>
          <a href="#" className="sidenav__menu-url">Home</a>
          <button className="sidenav__menu-toggle" aria-haspopup="true" aria-label="Open dropdown"
          ><i className="ui-arrow-down"></i></button>
          <ul className="sidenav__menu-dropdown">
            <li><a href="/" className="sidenav__menu-url">Home Default</a></li>
            <li><a href="index-politics.html" className="sidenav__menu-url">Home Politics</a></li>
            <li><a href="index-fashion.html" className="sidenav__menu-url">Home Fashion</a></li>
            <li><a href="index-games.html" className="sidenav__menu-url">Home Games</a></li>
            <li><a href="index-videos.html" className="sidenav__menu-url">Home Videos</a></li>
            <li><a href="index-music.html" className="sidenav__menu-url">Home Music</a></li>
          </ul>
        </li>


        <li>
          <a href="#" className="sidenav__menu-url">World</a>
        </li>
        <li>
          <a href="#" className="sidenav__menu-url">Business</a>
        </li>
        <li>
          <a href="#" className="sidenav__menu-url">Fashion</a>
        </li>
        <li>
          <a href="#" className="sidenav__menu-url">Lifestyle</a>
        </li>
        <li>
          <a href="#" className="sidenav__menu-url">Advertise</a>
        </li>
      </ul>
    </nav>

    <div className="socials sidenav__socials">
      <a className="social social-facebook" href="#" target="_blank" aria-label="facebook">
        <i className="ui-facebook"></i>
      </a>
      <a className="social social-twitter" href="#" target="_blank" aria-label="twitter">
        <i className="ui-twitter"></i>
      </a>
      <a className="social social-google-plus" href="#" target="_blank" aria-label="google">
        <i className="ui-google"></i>
      </a>
      <a className="social social-youtube" href="#" target="_blank" aria-label="youtube">
        <i className="ui-youtube"></i>
      </a>
      <a className="social social-instagram" href="#" target="_blank" aria-label="instagram">
        <i className="ui-instagram"></i>
      </a>
    </div>
  </header>
}

const TopBar = () => {
  return <div className="top-bar d-none d-lg-block">
    <div className="container">
      <div className="row">


        <div className="col-lg-6">
          <ul className="top-menu">
            <li><a href="#">About</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>


        <div className="col-lg-6">
          <div className="socials nav__socials socials--nobase socials--white justify-content-end">
            <a className="social social-facebook" href="#" target="_blank" aria-label="facebook">
              <i className="ui-facebook"></i>
            </a>
            <a className="social social-twitter" href="#" target="_blank" aria-label="twitter">
              <i className="ui-twitter"></i>
            </a>
            <a className="social social-google-plus" href="#" target="_blank" aria-label="google">
              <i className="ui-google"></i>
            </a>
            <a className="social social-youtube" href="#" target="_blank" aria-label="youtube">
              <i className="ui-youtube"></i>
            </a>
            <a className="social social-instagram" href="#" target="_blank" aria-label="instagram">
              <i className="ui-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
}

const NavCategories = ["Home","Latest","World","Local","Business","Politics","Sports","Entertainment","Technology"]

const NavBar = ({ toggle, setToggle }) => {
  return <header className="nav">

    <div className="nav__holder nav--sticky" style={{'width':'100%'}}>
      <div className="container relative">
        <div className="flex-parent">


          <button className={toggle ? "nav-icon-toggle--is-open" : "nav-icon-toggle"} id="nav-icon-toggle" aria-label="Open side menu"
            onClick={() => setToggle(!toggle)}
          >
            <span className="nav-icon-toggle__box">
              <span className="nav-icon-toggle__inner"></span>
            </span>
          </button>


          <a href="/" className="logo" style={{ fontSize: `1.5rem`, fontWeight: `bold`, letterSpacing: `1.2px`, fontFamily: `ui-serif` }}>
            TheDailyWave
          </a>
          


          <nav className="flex-child nav__wrap d-none d-lg-block">
            
            <ul className="nav__menu">
              {
                NavCategories.map((category,i)=><li key={i}><a href="/">{category}</a></li>)
              }
            
              

              {/* <li className="nav__dropdown active">
                <a href="/">Home</a>
                <ul className="nav__dropdown-menu">
                  <li><a href="index.html">Home Default</a></li>
                  <li><a href="index-politics.html">Home Politics</a></li>
                </ul>
              </li> */}

            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
}

const Loader = () => {
  return <div className="loader-mask">
    <div className="loader">
      <div></div>
    </div>
  </div>
}

const BreadCrumb = () => {
  return <div className="container">
    <ul className="breadcrumbs">
      <li className="breadcrumbs__item">
        <a href="/" className="breadcrumbs__url">Home</a>
      </li>
      <li className="breadcrumbs__item">
        <a href="/" className="breadcrumbs__url">News</a>
      </li>
      <li className="breadcrumbs__item breadcrumbs__item--current">
        World
      </li>
    </ul>
  </div>
}

const SocialHangout = () => {
  return <aside className="widget widget-socials">
    <h4 className="widget-title">Let's hang out on social</h4>
    <div className="socials socials--wide socials--large">
      <div className="row row-16">
        <div className="col">
          <a className="social social-facebook" href="#" title="facebook" target="_blank" aria-label="facebook">
            <i className="ui-facebook"></i>
            <span className="social__text">Facebook</span>
          </a>
          <a className="social social-twitter" href="#" title="twitter" target="_blank" aria-label="twitter">
            <i className="ui-twitter"></i>
            <span className="social__text">Twitter</span>
          </a>
          <a className="social social-youtube" href="#" title="youtube" target="_blank" aria-label="youtube">
            <i className="ui-youtube"></i>
            <span className="social__text">Youtube</span>
          </a>
        </div>
        <div className="col">
          <a className="social social-google-plus" href="#" title="google" target="_blank" aria-label="google">
            <i className="ui-google"></i>
            <span className="social__text">Google+</span>
          </a>
          <a className="social social-instagram" href="#" title="instagram" target="_blank" aria-label="instagram">
            <i className="ui-instagram"></i>
            <span className="social__text">Instagram</span>
          </a>
          <a className="social social-rss" href="#" title="rss" target="_blank" aria-label="rss">
            <i className="ui-rss"></i>
            <span className="social__text">Rss</span>
          </a>
        </div>
      </div>
    </div>
  </aside>
}

const Footer = () => {
  return <footer className="footer footer--dark">
    <div className="container">
      <div className="footer__widgets">
        <div className="row">

          <div className="col-lg-3 col-md-6">
            <aside className="widget widget-logo">
              The Daily Wave
              <p className="copyright">
                &copy; 2023 | thedailywave.com
              </p>
            </aside>
          </div>

        </div>
      </div>
    </div>
  </footer>
}


const SocialShare = ({title, slug}) => {
  const twitter_url = "https://twitter.com/intent/tweet?" + encodeURI(`text=${title}
  &url=https://thedailywave.com${slug}`)
  

  return <div className="entry__share">
    <div className="sticky-col">
      <div className="socials socials--rounded socials--large">
        <a className="social social-facebook" href="/" title="facebook" target="_blank" aria-label="facebook">
          <i className="ui-facebook"></i>
        </a>
        <a className="social social-twitter" href={twitter_url} title="twitter" target="_blank" aria-label="twitter">
          <i className="ui-twitter"></i>
        </a>
        <a className="social social-google-plus" href="/" title="google" target="_blank" aria-label="google">
          <i className="ui-google"></i>
        </a>
        <a className="social social-pinterest" href="/" title="pinterest" target="_blank" aria-label="pinterest">
          <i className="ui-pinterest"></i>
        </a>
      </div>
    </div>
  </div>
}
const PopularPost = () => {
  return <aside className="widget widget-popular-posts">
    <h4 className="widget-title">Popular Posts</h4>
    <ul className="post-list-small">
      <li className="post-list-small__item">
        <article className="post-list-small__entry clearfix">
          <div className="post-list-small__img-holder">
            <div className="thumb-container thumb-100">
              <a href="single-post.html">
                {/* <img data-src="img/content/post_small/post_small_1.jpg" src="img/empty.png" alt="" className="post-list-small__img--rounded lazyload"> */}
              </a>
            </div>
          </div>
          <div className="post-list-small__body">
            <h3 className="post-list-small__entry-title">
              <a href="single-post.html">Follow These Smartphone Habits of Successful Entrepreneurs</a>
            </h3>
            <ul className="entry__meta">
              <li className="entry__meta-author">
                <span>by</span>
                <a href="#">DeoThemes</a>
              </li>
              <li className="entry__meta-date">
                Jan 21, 2018
              </li>
            </ul>
          </div>
        </article>
      </li>
      <li className="post-list-small__item">
        <article className="post-list-small__entry clearfix">
          <div className="post-list-small__img-holder">
            <div className="thumb-container thumb-100">
              <a href="single-post.html">
                {/* <img data-src="img/content/post_small/post_small_2.jpg" src="img/empty.png" alt="" className="post-list-small__img--rounded lazyload"> */}
              </a>
            </div>
          </div>
          <div className="post-list-small__body">
            <h3 className="post-list-small__entry-title">
              <a href="single-post.html">Lose These 12 Bad Habits If You're Serious About Becoming a Millionaire</a>
            </h3>
            <ul className="entry__meta">
              <li className="entry__meta-author">
                <span>by</span>
                <a href="#">DeoThemes</a>
              </li>
              <li className="entry__meta-date">
                Jan 21, 2018
              </li>
            </ul>
          </div>
        </article>
      </li>
      <li className="post-list-small__item">
        <article className="post-list-small__entry clearfix">
          <div className="post-list-small__img-holder">
            <div className="thumb-container thumb-100">
              <a href="single-post.html">
                {/* <img data-src="img/content/post_small/post_small_3.jpg" src="img/empty.png" alt="" className="post-list-small__img--rounded lazyload"> */}
              </a>
            </div>
          </div>
          <div className="post-list-small__body">
            <h3 className="post-list-small__entry-title">
              <a href="single-post.html">June in Africa: Taxi wars, smarter cities and increased investments</a>
            </h3>
            <ul className="entry__meta">
              <li className="entry__meta-author">
                <span>by</span>
                <a href="#">DeoThemes</a>
              </li>
              <li className="entry__meta-date">
                Jan 21, 2018
              </li>
            </ul>
          </div>
        </article>
      </li>
      <li className="post-list-small__item">
        <article className="post-list-small__entry clearfix">
          <div className="post-list-small__img-holder">
            <div className="thumb-container thumb-100">
              <a href="single-post.html">
                {/* <img data-src="img/content/post_small/post_small_4.jpg" src="img/empty.png" alt="" className="post-list-small__img--rounded lazyload"> */}
              </a>
            </div>
          </div>
          <div className="post-list-small__body">
            <h3 className="post-list-small__entry-title">
              <a href="single-post.html">PUBG Desert Map Finally Revealed, Here Are All The Details</a>
            </h3>
            <ul className="entry__meta">
              <li className="entry__meta-author">
                <span>by</span>
                <a href="#">DeoThemes</a>
              </li>
              <li className="entry__meta-date">
                Jan 21, 2018
              </li>
            </ul>
          </div>
        </article>
      </li>
    </ul>
  </aside>
}

const RelatedArticles = () => {
  return <section className="section related-posts mt-40 mb-0">
    <div className="title-wrap title-wrap--line title-wrap--pr">
      <h3 className="section-title">Related Articles</h3>
    </div>

    <div id="owl-posts-3-items" className="owl-carousel owl-theme owl-carousel--arrows-outside">
      <article className="entry thumb thumb--size-1">
        <div className="entry__img-holder thumb__img-holder" >
          <div className="bottom-gradient"></div>
          <div className="thumb-text-holder">
            <h2 className="thumb-entry-title">
              <a href="single-post.html">9 Things to Consider Before Accepting a New Job</a>
            </h2>
          </div>
          <a href="single-post.html" className="thumb-url"></a>
        </div>
      </article>
      <article className="entry thumb thumb--size-1">
        <div className="entry__img-holder thumb__img-holder" >
          <div className="bottom-gradient"></div>
          <div className="thumb-text-holder">
            <h2 className="thumb-entry-title">
              <a href="single-post.html">Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off</a>
            </h2>
          </div>
          <a href="single-post.html" className="thumb-url"></a>
        </div>
      </article>
      <article className="entry thumb thumb--size-1">
        <div className="entry__img-holder thumb__img-holder"  >
          <div className="bottom-gradient"></div>
          <div className="thumb-text-holder">
            <h2 className="thumb-entry-title">
              <a href="single-post.html">(Infographic) Is Work-Life Balance Even Possible?</a>
            </h2>
          </div>
          <a href="single-post.html" className="thumb-url"></a>
        </div>
      </article>
      <article className="entry thumb thumb--size-1">
        <div className="entry__img-holder thumb__img-holder" >
          <div className="bottom-gradient"></div>
          <div className="thumb-text-holder">
            <h2 className="thumb-entry-title">
              <a href="single-post.html">Is Uber Considering To Sell its Southeast Asia Business to Grab?</a>
            </h2>
          </div>
          <a href="single-post.html" className="thumb-url"></a>
        </div>
      </article>
      <article className="entry thumb thumb--size-1">
        <div className="entry__img-holder thumb__img-holder" >
          <div className="bottom-gradient"></div>
          <div className="thumb-text-holder">
            <h2 className="thumb-entry-title">
              <a href="single-post.html">Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off</a>
            </h2>
          </div>
          <a href="single-post.html" className="thumb-url"></a>
        </div>
      </article>
    </div>

  </section>
}



export {Layout, BreadCrumb, SocialShare, SocialHangout,RelatedArticles }
