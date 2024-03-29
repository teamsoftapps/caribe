/** @format */

// import "./LandingPage.module.css";
import classes from './LandingPage.module.css';
import Navbar from './../../components/Navbar/Navbar';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';
import { images } from '../../utils/Images';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel-styles.css';
import { Footer } from '../../components/Footer/Footer';

import ReactStars from 'react-rating-stars-component';

//Swiper Imports
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useDispatch, useSelector } from 'react-redux';
import { login, setUser } from '../../store/reducers/authSlice.js';

// // import { images } from "../../utils/Images";

const Dummy_Products = [
  {
    image: images.product1,
    price: 10,
    rating: 5,
    title: 'Watch',
  },
  {
    image: images.product2,
    price: 20,
    rating: 3,
    title: 'head Phones',
  },
  {
    image: images.product3,
    price: 20,
    rating: 4,
    title: 'VR',
  },
  {
    image: images.product4,
    price: 20,
    rating: 5,
    title: 'Ear pods',
  },
  {
    image: images.product2,
    price: 20,
    rating: 3,
    title: 'head Phones',
  },
  {
    image: images.product3,
    price: 20,
    rating: 4,
    title: 'VR',
  },
];

const dummy_categories = [
  {
    title: 'Trending',
    image: images.promo1,
  },
  {
    title: 'Minimalism',
    image: images.promo2,
  },
];

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 400);
  const [istemsToShow, setItemsToShow] = useState(4);
  const dispatch = useDispatch();
  // const isLoggedin = useSelector((state) => state.auth.isLoggedin);
  // for testing
  const isLoggedin = true;
  useEffect(() => {}, []);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 400);
      if (window.innerWidth < 400) {
        setItemsToShow(1.2);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleOnProductClick = (product) => {
    const productInfo = product;
    console.log(product, "product item");
    console.log(isLoggedin);
    if (isLoggedin) {
      console.log("reached here");
      navigate("/product", { state: productInfo });
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <Navbar showSearch={true} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {isMobile ? (
          <div>
            <div className={classes.mobileDrawerContent}>
              <div className={classes.mobileDrawerWrapper}>
                <div
                  style={{ fontSize: '8.5vw', opacity: '1' }}
                  className={classes.draweContentStyle}>
                  Get very modern
                  <br />
                  Technology in the
                  <br />
                  present
                </div>
                <div
                  style={{
                    color: 'gray',
                    fontSize: '5vw',
                    marginTop: '3vw',
                    marginBottom: '6vw',
                  }}>
                  An exclusive selection of this
                  <br />
                  season's trends
                </div>

                <div>
                  <button
                    style={{ fontSize: '4vw' }}
                    className={classes.mobileShopnowButton}>
                    Shop now
                  </button>
                </div>
              </div>
            </div>
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={true}
              showIndicators={true}>
              <div className={classes.sliderItem}>
                <img
                  src={images.mobileSlider}
                  className={classes.sliderImage}
                />
              </div>
              <div>
                <img
                  src={images.mobileSlider}
                  className={classes.sliderImage}
                />
              </div>
              <div>
                <img
                  src={images.mobileSlider}
                  className={classes.sliderImage}
                />
              </div>
            </Carousel>
          </div>
        ) : (
          <div>
            <Carousel
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              showStatus={true}
              showIndicators={true}>
              <div className={classes.sliderItem}>
                <img
                  src={images.slider1}
                  className={classes.sliderImage}
                />
                <div className={classes.drawerContentOverlay}>
                  <div className={classes.draweContentStyle}>
                    Get very modern
                    <br />
                    Technology in
                    <br />
                    The present
                  </div>
                  <div
                    style={{
                      color: 'gray',
                      fontSize: '1vw',
                      marginTop: '2vw',
                      marginBottom: '2vw',
                    }}>
                    An exclusive selection
                    <br />
                    of this season's
                  </div>
                  <div>
                    <button
                      style={{ fontSize: '1vw' }}
                      className={classes.sliderButton}>
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src={images.slider1}
                  className={classes.sliderImage}
                />
                <div className={classes.drawerContentOverlay}>
                  <div className={classes.draweContentStyle}>
                    Get very modern
                    <br />
                    Technology in
                    <br />
                    The present
                  </div>
                  <div
                    style={{
                      color: 'gray',
                      fontSize: '1vw',
                      marginTop: '2vw',
                      marginBottom: '2vw',
                    }}>
                    An exclusive selection
                    <br />
                    of this season's
                  </div>
                  <p>
                    <button className={classes.sliderButton}>
                      <div style={{ fontSize: '1vw' }}>Shop now</div>
                    </button>
                  </p>
                </div>
              </div>
              <div>
                <img
                  src={images.slider1}
                  className={classes.sliderImage}
                />
                <div className={classes.drawerContentOverlay}>
                  <div className={classes.draweContentStyle}>
                    Get very modern
                    <br />
                    Technology in
                    <br />
                    The present
                  </div>
                  <div
                    style={{
                      color: 'gray',
                      fontSize: '1vw',
                      marginTop: '2vw',
                      marginBottom: '2vw',
                    }}>
                    An exclusive selection
                    <br />
                    of this season's
                  </div>
                  <p>
                    <button
                      style={{ fontSize: '1vw' }}
                      className={classes.sliderButton}>
                      Shop now
                    </button>
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        )}
        {/* SERVICE TTEMP CONTENT GHERE ======================== */}
        <ServiceCard />
        <div className={classes.wrapper}>
          <div className={classes.productsContainer}>
            <div
              style={{
                marginTop: '3vw',
                marginBottom: '3vw',
                width: '100%',
                display: 'flex',
                justifyContent: 'start',
                textAlign: 'start',
                color: '#414141',
                fontSize: '2.5vw',
                fontWeight: 'bold',
              }}>
              Our Products
            </div>
          </div>
          {/* <div className={classes.productListContainer} > */}
          {/* {PRODUCTS LIST HERE } */}
          <div className={classes.productsContainer}>
            <Swiper
              pagination={{ dynamicBullets: true, clickable: true }}
              className='myswiper'
              modules={[Pagination]}
              slidesPerView={istemsToShow}>
              {Dummy_Products.map((product, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: '16vw',
                      // backgroundColor: "red",
                      paddingBottom: '4vh',
                    }}>
                    <div
                      onClick={() => handleOnProductClick(product)}
                      className={classes.mainProductCard}>
                      <div style={{ marginTop: '.7vw' }}>
                        <img
                          className={classes.productImage}
                          src={product.image}></img>
                      </div>
                      <div className={classes.ProductsCardInfo}>
                        {/* <ReactStars
                          count={5}
                          onChange={() => {}}
                          size={24}
                          activeColor="#ffd700"
                          value={product.rating}
                          edit={false}
                          classNames="star"
                        /> */}
                        <img
                          src={images.rating}
                          className={classes.starSize}
                          alt='rating'
                        />
                        <div className={classes.productNameContainer}>
                          <div className={classes.cardTitle}>
                            {product.title}
                          </div>

                          <img
                            className={classes.productIcon}
                            src={images.heart}
                          />
                        </div>
                        <div
                          className={
                            classes.productPrice
                          }>{`${product.price}.00`}</div>
                      </div>
                      {/* </div> */}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          {/*            ----------------------------------      PROMOTOION RED DARD FROM HERE    -------------         */}
          <div
            style={{
              display: 'flex',
              height: '9vw',
              width: '100%',
              backgroundColor: '#ff3c3c',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              marginTop: '5vw',
              marginBottom: '5vw',
            }}>
            <div>
              <p
                className={classes.promo}
                style={{ color: 'white' }}>
                Download our new app today! Dont miss our mobile-only offers
                <br />
                and shop with Android Play.
              </p>
            </div>
          </div>

          {isMobile ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: '10vw',
                fontWeight: 'bold',
              }}>
              <div
                className={classes.text}
                style={{
                  textAlign: 'start',
                  marginTop: '1vw',
                  marginBottom: '1vw',
                  // fontSize: "2vw",
                  fontWeight: 'bold',
                }}>
                Top categories <br /> This week
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {dummy_categories.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ marginRight: '2vw' }}>
                      <img
                        style={{ width: '90vw', height: 'auto' }}
                        src={item.image}
                      />
                      <div className={classes.pictureText}>{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                width: '80vw',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: '5vw',
                  justifyContent: 'space-between',
                  width: '22vw',
                  alignItems: 'start',
                  height: '22vw',
                }}>
                <div
                  className={classes.text}
                  style={{
                    textAlign: 'start',
                    fontSize: '2vw',
                    fontWeight: 'bold',
                  }}>
                  Top categories <br /> This week
                </div>
                <div
                  style={{
                    display: 'flex',
                    width: '8vw',
                    justifyContent: 'space-between',
                  }}>
                  <button
                    style={{
                      height: '3.5vw',
                      width: '3.5vw',
                      border: 'none',
                      borderRadius: '100px',
                    }}>
                    <img
                      style={{ width: '.9vw', height: 'auto' }}
                      src={images.less}
                    />
                  </button>
                  <button
                    style={{
                      height: '3.5vw',
                      width: '3.5vw',
                      border: 'none',
                      borderRadius: '100px',
                    }}>
                    <img
                      style={{ width: '.9vw', height: 'auto' }}
                      src={images.greater}
                    />
                  </button>
                </div>

                <div
                  style={{
                    fontSize: '2vw',
                    fontWeight: 'bold',
                    color: '#ff3c3c',
                  }}>
                  Full catalog
                </div>
              </div>
              <div style={{ display: 'flex', width: '40vw' }}>
                {dummy_categories.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ marginRight: '10px' }}>
                      <img
                        src={item.image}
                        style={{ width: '22vw' }}
                      />
                      <div className={classes.webText}>{item.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {isMobile ? (
            <div
              className={classes.of10container}
              style={{ display: 'flex', alignItems: 'center' }}>
              <img
                className={classes.off10}
                style={{ height: 'auto', alignSelf: 'center' }}
                src={images.off10ver}></img>
            </div>
          ) : (
            <div
              className={classes.of10container}
              style={{ display: 'flex', alignItems: 'center' }}>
              <img
                className={classes.off10}
                style={{ height: 'auto', alignSelf: 'center' }}
                src={images.off10}></img>
            </div>
          )}

          <div
            className={classes.promoImagesContainer}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80vw',
              marginTop: '5vh',
            }}>
            <img
              className={classes.smartwatch}
              src={images.smartwatch}></img>

            <img
              className={classes.smartPhone}
              src={images.smartphone}></img>
          </div>
          <div
            style={{
              height: '30vw',
              width: '70vw',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}>
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              <text
                style={{
                  fontWeight: 'bolder',
                  color: 'grey',
                }}
                className={classes.trendingText}>
                New Trending
              </text>
              <text
                className={classes.exclusiveText}
                style={{ color: 'grey' }}>
                An exclusive selection
                <br /> of this season's trends
              </text>
            </div>
          </div>
          <div className={classes.productsContainer}>
            <Swiper
              pagination={{ dynamicBullets: true, clickable: true }}
              className='myswiper'
              modules={[Pagination]}
              slidesPerView={istemsToShow}>
              {Dummy_Products.map((product, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: '16vw',
                      // backgroundColor: "red",
                      paddingBottom: '4vh',
                    }}>
                    <div
                      onClick={() => handleOnProductClick(product)}
                      className={classes.mainProductCard}>
                      <div style={{ marginTop: '.7vw' }}>
                        <img
                          className={classes.productImage}
                          src={product.image}></img>
                      </div>
                      <div className={classes.ProductsCardInfo}>
                        {/* <ReactStars
                          count={5}
                          onChange={() => {}}
                          size={24}
                          activeColor="#ffd700"
                          value={product.rating}
                          edit={false}
                          classNames="star"
                        /> */}
                        <img
                          src={images.rating}
                          className={classes.starSize}
                          alt='rating'
                        />
                        <div className={classes.productNameContainer}>
                          <div className={classes.cardTitle}>
                            {product.title}
                          </div>

                          <img
                            className={classes.productIcon}
                            src={images.heart}
                          />
                        </div>
                        <div
                          className={
                            classes.productPrice
                          }>{`${product.price}.00`}</div>
                      </div>
                      {/* </div> */}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
