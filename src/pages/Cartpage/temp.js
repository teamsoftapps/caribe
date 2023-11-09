<div className={classes.cartContainer}>
  <h1 style={{ marginBottom: "5vh", marginTop: "5vh", color: "262626" }}>
    CART
  </h1>
  {/* <div>header</div> */}
  <div className={classes.ProductContainer}>
    {/* <div className={classes.productInnerWrapper}> */}
    <div className={classes.productsHeader}>
      {/* <div className={[classes.headingText, classes.spacing]}>Image</div> */}
      <div className={`${classes.spacing}  ${classes.headingText}`}>
        <span style={{ color: "#F8F8F8" }}>m</span> {`Image`}
      </div>
      <div className={`${classes.spacing}  ${classes.headingText}`}>
        Product
      </div>
      <div className={`${classes.spacing}  ${classes.headingText}`}>Price</div>
      <div className={`${classes.spacing}  ${classes.headingText}`}>QTY</div>
      <div className={`${classes.spacing}  ${classes.headingText}`}>Total</div>
      <div className={`${classes.spacing}  ${classes.headingText}`}></div>
    </div>
    {Dummy_Products.map((product, index) => {
      return (
        <div key={index} className={classes.productitemContainer}>
          <div>
            <img
              style={{ height: "7vw", width: "5vw" }}
              src={product.image}
              alt="product image"
            />
          </div>
          <div
            style={{ color: "#707070", fontWeight: "600" }}
            className={classes.spacing}
          >
            {product.title}
          </div>
          <p style={{ width: "5vw" }} className={classes.priceText}>
            ${product.price}.00
          </p>
          <div className={classes.qtyContainer}>
            <div
              onClick={() => onPlusClick(product)}
              className={classes.iconContainer}
            >
              <img style={{ width: "10px" }} src={images.plus}></img>
            </div>

            <div className={classes.qtyBox}>{product.quantity}</div>
            <div
              onClick={() => onMinusClick(product)}
              className={classes.iconContainer}
            >
              <img style={{ width: "10px" }} src={images.minus}></img>
            </div>
          </div>
          <div className={`${classes.spacing} ${classes.priceText}`}>{`$${
            product.price * product.quantity
          }.00`}</div>
          <div
            className={classes.spacing}
            onClick={() => handleOnDelete(product)}
          >
            <img
              className={classes.deleteIcon}
              src={images.deleteIcon}
              alt="delete"
            />
          </div>
        </div>
      );
    })}
  </div>
  <div className={classes.totalContainer}>
    <h4 className={classes.totalText}>Total</h4>
    <h2 className={classes.totalText}>$600</h2>
  </div>

  {/* CHECKOUT CONTAINERS  */}

  <div className={classes.CheckoutContainer}>
    <div className={classes.voucherContainer}>
      <h1>Voucher</h1>
      <p style={{ fontSize: "large", color: "#414141" }}>
        Enter your coupen if you have one
      </p>
      <input
        className={classes.textInput}
        type="text"
        placeholder="Voucher Code"
      />
      <div>
        <button className={` ${classes.btnText} ${classes.applybtn}`}>
          Apply
        </button>
      </div>
    </div>
    <div
      style={{
        width: "40%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: " #F8F8F8",
        paddingBottom: "5vh",
      }}
    >
      <div className={classes.checkoutInnerContainer}>
        <div className={classes.checkoutContent}>
          <p className={classes.headingText}>Subtotal</p>
          <p
            className={classes.headingText}
            style={{ color: "rgb(112, 112, 112)" }}
          >
            400$
          </p>
        </div>
        <div className={classes.checkoutContent}>
          <p className={classes.headingText}>Shipping</p>
          <p
            className={classes.headingText}
            style={{ color: "rgb(112, 112, 112)" }}
          >
            100$
          </p>
        </div>
        <div className={classes.checkoutContent}>
          <p className={classes.headingText} style={{ color: "#FF3C3C" }}>
            {" "}
            Total
          </p>
          <p className={classes.headingText} style={{ color: "#FF3C3C" }}>
            500$
          </p>
        </div>
        <button
          onClick={onCheckout}
          className={` ${classes.btnText} ${classes.btnCheckout}`}
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</div>;
