 {/* {showNavModal ? (
              <AnimatePresence>
                <motion.nav
                  className={classes.modalAnimation}
                  variants={varients}
                  animate={showNavModal ? "open" : "closed"}
                >
                  <div className={classes.crossContainer}>
                    <img
                      onClick={onCloseModal}
                      className={classes.crossIcon}
                      src={images.cross}
                      alt="close"
                    />
                  </div>
                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.person}
                    ></img>
                    <div className={classes.drawerText}>
                      <a className={classes.link} href="">
                        Account
                      </a>
                    </div>
                  </div>
                  <div
                    onClick={onOpenCart}
                    className={classes.modelSocialsComtainer}
                  >
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.shoppingBag}
                    ></img>
                    <div className={classes.drawerText}>My Cart</div>
                  </div>
                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.facebook}
                    ></img>
                    <div className={classes.drawerText}>
                      <a
                        className={classes.link}
                        href="https://www.facebook.com/"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.instagram}
                    ></img>
                    <div className={classes.drawerText}>
                      <a
                        className={classes.link}
                        href="https://www.instagram.com/explore/"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>

                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.twitter}
                    ></img>
                    <div className={classes.drawerText}>
                      <a
                        className={classes.link}
                        target="_blank"
                        href="https://twitter.com/"
                      >
                        Twitter
                      </a>
                    </div>
                  </div>
                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.linkedin}
                    ></img>
                    <div className={classes.drawerText}>
                      <a
                        className={classes.link}
                        target="_blank"
                        href="https://linkedin.com/"
                      >
                        Linkedin
                      </a>
                    </div>
                  </div>
                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.call}
                    ></img>
                    <div className={classes.drawerText}>
                      <a
                        className={classes.link}
                        target="_blank"
                        href="https://Email: +support@tronix.com/"
                      >
                        +12 345 6789 0
                      </a>
                    </div>
                  </div>
                  <div className={classes.modelSocialsComtainer}>
                    <img
                      className={classes.mobileDrawerIcon}
                      src={images.email}
                    ></img>
                    <div className={classes.drawerText}>
                      <a
                        className={classes.link}
                        target="_blank"
                        href="Email: +support@tronix.com/"
                      >
                        +support@tronix.com
                      </a>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            ) : (
              <div className={classes.navlogocontain}>
                <img
                  className={classes.navdroplogo}
                  onClick={onClickNavbarDrawer}
                  src={images.dropDown}
                ></img>
              </div>
            )} */}