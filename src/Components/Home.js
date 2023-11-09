import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
function HomePage() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators ">
          <li data-bs-target="#carouselExampleCaptions " data-bs-slide-to="0" className="active "></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src="https://biene-theme.myshopify.com/cdn/shop/files/slider1.jpg?v=1614332449" className="d-block w-100" alt="Image 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5 id="couresl_top" >Organic <span  id="sub_headers">Honey</span> For <span  id="sub_headers">Healthy Life</span></h5>
               <a id="courasel_shop" href="#" class="btn btn-warning">shop</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://biene-theme.myshopify.com/cdn/shop/files/slider2.jpg?v=1614332449" className="d-block w-100" alt="Image 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5 id="couresl_top">Natural<span id="sub_headers">Food </span> For <span id="sub_headers">Body</span></h5>
               <a id="courasel_shop" href="#" class="btn btn-warning">shop</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://biene-theme.myshopify.com/cdn/shop/files/slider3.jpg?v=1614332450" className="d-block w-100" alt="Image 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5 id="couresl_top">From Our <span id="sub_headers">Hive </span> to Our <span id="sub_headers"> Kitchen</span></h5>
               <a id="courasel_shop" href="#" class="btn btn-warning">shop</a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon btn btn-warning" aria-hidden="true"></span>
          <span className="visually-hidden btn btn-warning">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon btn btn-warning" aria-hidden="true"></span>
          <span className="visually-hidden btn btn-warning">Next</span>
        </a>
      </div>
      <div className='about-us'>
        <h2 id="sub_heads"> ABOUT <span id="sub_headers">Us</span> </h2>
        
      </div>
      {/* First container */}
      <div className="container">
        <div className="text">
          <h2>Honey As It Should Be:
All natural enzymes, pollens, amino acids, propolis, vitamins, minerals, texture, flavor and color.</h2>
          <a id="shop-about" href="#" class="btn btn-warning">shop</a>
        </div>
        <div className="image">
          <img src="https://biene-theme.myshopify.com/cdn/shop/files/grid-banner-img-right_600x.jpg?v=1614398209" alt="Image on the Right" />
        </div>
      </div>

      {/* Second container */}
      <div className="container">
        <div className="image">
          <img src="https://biene-theme.myshopify.com/cdn/shop/files/grid-banner-img-left_600x.jpg?v=1614398209" alt="Image on the Left" />
        </div>
        <div className="text">
          <img id="side-logo" src="https://lh3.googleusercontent.com/pw/ADCreHe7KA2H-AE9c4UByAQyzrOCUKVqFn81LvZ5uGjcSIqGwhAtsiEqQ3PL1t32qZB-KTVTkdpfMSj_2kK4HOmjSxP48XCo95AzTaAXxHF_jHSa3kmx3Cz0Xci5uV8P7TrjcM0dlZC1IW7QFpbcIXsvth6S=w1137-h611-s-no-gm?authuser=0" alt="" />
          <h2 className="centered-text"> We're your go-to for pure, delicious honey. We source the best honey varieties and deliver them to your doorstep. Taste the goodness of nature with us!"</h2>
        </div>
      </div>

      {/* Cards for new products */}
      <h2 id="sub_heads" className='lataest_produt'>LATEST <span id="sub_headers">Products</span></h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div id="product" className="card">
            <img src="https://biene-theme.myshopify.com/cdn/shop/files/p13_470x.jpg?v=1614337452" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Honey Tea</h5>
              <p className="card-text">$50.00</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div id="product" className="card">
            <img src="https://biene-theme.myshopify.com/cdn/shop/files/p3_470x.jpg?v=1614337452" className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Chocolate</h5>
              <p className="card-text">$ 60.40</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div id="product" className="card">
            <img src="https://biene-theme.myshopify.com/cdn/shop/files/p1_470x.jpg?v=1614337452" className="card-img-top" alt="Product 3" />
            <div className="card-body">
              <h5 className="card-title">Face wash</h5>
              <p className="card-text">$ 40.50</p>
            </div>
          </div>
        </div>
      </div>
        <div id="action">
          <a href="#" class="btn btn-warning">shop</a>
      </div>
      <div className='blog_section'>
        <h2 id="blog" >OUR <span id="sub_headers">Blog</span></h2>
        <p id="blog_lower">News and Events in News</p>
      </div>
      {/* Blog section */}
       <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div id="blog-card" className="card h-100">
          <img src="https://biene-theme.myshopify.com/cdn/shop/articles/blog-10.jpg?v=1598434765" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Zero Sugar</h5>
            <p>
              <span>
                <FontAwesomeIcon icon={faUser} />  John Doe |
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendar} /> 20/08/2023
              </span>
            </p>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
               <a  id="read-more" href="#" className="btn btn-warning">
            Read more
          </a>
          </div>
         
        </div>
      </div>
      <div className="col">
        <div id="blog-card" className="card h-100">
          <img src="https://biene-theme.myshopify.com/cdn/shop/articles/blog-9.jpg?v=1598434701" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Fresh & sweet</h5>
            <p>
              <span >
                <FontAwesomeIcon icon={faUser} /> John Doe |
              </span>
              <span >
                <FontAwesomeIcon icon={faCalendar} />  20/08/2023
              </span>
            </p>
              <p className="card-text">This is a short card.</p>
               <a  id="read-more" href="#" className="btn btn-warning">
             Read more
          </a>
          </div>
         
        </div>
      </div>
      <div className="col">
        <div  id="blog-card" className="card h-100">
          <img src="https://biene-theme.myshopify.com/cdn/shop/articles/blog-8.jpg?v=1598434639" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sweet and medical</h5>
            <p>
              <span >
                <FontAwesomeIcon icon={faUser} />  John Doe |
              </span>
              <span >
                <FontAwesomeIcon icon={faCalendar} />  20/08/2023
              </span>
            </p>
            <p className="card-text">
              This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
               <a id="read-more" href="#" className="btn btn-warning">
             Read more
          </a>
          </div>
        </div>
      </div>
    </div>

      {/* Testimonials */}
      <div class="grid-container">
        <figure class="snip1390">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
            <figcaption>
                <h2>Eleanor Crisp</h2>
                <h4>sports man</h4>
                <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
            </figcaption>
        </figure>
        <figure class="snip1390">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
            <figcaption>
                <h2>Gordon Norman</h2>
                <h4>Doctor</h4>
                <blockquote>Wormwood: Calvin, how about you? Calvin: Hard to say ma'am. I think my cerebellum has just fused.</blockquote>
            </figcaption>
        </figure>
        <figure class="snip1390">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
            <figcaption>
                <h2>Sue Shei</h2>
                <h4>Nutritionist</h4>
                <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
            </figcaption>
        </figure>
        <figure class="snip1390">
            <img src="data:image/jpeg;base64,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" alt="profile-sample6" class="profile" />
            <figcaption>
                <h2>Sue Shei</h2>
                <h4>Farmer</h4>
                <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
            </figcaption>
        </figure>
    </div>
    </div>
  );
}

export default HomePage;
