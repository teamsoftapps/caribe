import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import classes from "./CartPage.module.css";
import { images } from "../../utils/Images";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCartItemquantity,
  decrementCartItemQuantity,
  removeItemFromCart,
  totalprice,
} from "../../store/reducers/cartSlice";

let Dummy_Products = [
  {
    image: images.product1,
    price: 10,
    rating: 5,
    title: "Watch",
    quantity: 1,
  },
  {
    image: images.product2,
    price: 20,
    rating: 3,
    title: "head Phones",
    quantity: 2,
  },
  {
    image: images.product3,
    price: 20,
    rating: 4,
    title: "VR",
    quantity: 3,
  },
  {
    image: images.product4,
    price: 20,
    rating: 5,
    title: "Ear pods",
    quantity: 4,
  },
];
export const CartPage = () => {
  const [products, setProducts] = useState(Dummy_Products);
  const productsRedux = useSelector((state) => state.cart.items);
  const productsprice = useSelector((state) => state.cart.totalPrice);
  // const [prices, setprices] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(productsRedux, "productsredux", productsprice);
  });

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(totalprice());
  }, [productsRedux]);

  const onIncrementProductQuantity = (product) => {
    dispatch(incrementCartItemquantity(product));
  };

  const onDecrementProductQuantity = (product) => {
    dispatch(decrementCartItemQuantity(product));
  };

  const onRemoveItemFromCart = (product) => [
    dispatch(removeItemFromCart(product)),
  ];

  const onCheckout = () => {
    navigate("/checkout");
  };
  // const totalPrice =()=>{
  //   productsRedux.
  // }
  const handleOnDelete = (product) => {
    const filteredProducts = products?.filter(
      (item) => item.title !== product.title
    );
    setProducts(filteredProducts);

    return;
  };
  return (
    <>
      <Navbar />
      <div className={classes.wrapper}>
        <div className={classes.cartContainer}>
          <h1
            style={{ marginBottom: "5vh", marginTop: "5vh", color: "262626" }}
          >
            CART
          </h1>
          {/* <div>header</div> */}
          <div className={classes.ProductContainer}>
            {/* <div className={classes.productInnerWrapper}> */}
            <div className={classes.productsHeader}>
              {/* <div className={[classes.headingText, classes.spacing]}>Image</div> */}
              <div className={`${classes.spacing}  ${classes.headingText}`}>
                {`Image`}
              </div>
              <div className={`${classes.spacing}  ${classes.headingText}`}>
                Product
              </div>
              <div className={`${classes.spacing}  ${classes.headingText}`}>
                Price
              </div>
              <div className={`${classes.spacing}  ${classes.headingText}`}>
                QTY
              </div>
              <div className={`${classes.spacing}  ${classes.headingText}`}>
                Total
              </div>
              <div
                className={`${classes.spacing}  ${classes.headingText}`}
              ></div>
            </div>
            {/* {products.map((product, index) => { */}
            {productsRedux?.map((product, index) => {
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
                    style={{
                      color: "#707070",
                      fontWeight: "600",
                      fontSize: "1vw",
                    }}
                    className={classes.spacing}
                  >
                    {product.title}
                  </div>
                  <p style={{ width: "5vw" }} className={classes.priceText}>
                    ${product.price}.00
                  </p>
                  <div className={classes.qtyContainer}>
                    <div
                      onClick={() => onIncrementProductQuantity(product)}
                      className={classes.iconContainer}
                    >
                      <img style={{ width: "10px" }} src={images.plus}></img>
                    </div>

                    <div className={classes.qtyBox}>{product.quantity}</div>
                    <div
                      onClick={() => onDecrementProductQuantity(product)}
                      className={classes.iconContainer}
                    >
                      <img style={{ width: "10px" }} src={images.minus}></img>
                    </div>
                  </div>
                  <div
                    className={`${classes.spacing} ${classes.priceText}`}
                  >{`$${product.price * product.quantity}.00`}</div>
                  <div
                    className={classes.spacing}
                    onClick={() => onRemoveItemFromCart(product)}
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
              <p style={{ fontSize: "medium", color: "#414141" }}>
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
                  {/* <p className={classes.headingText}>Subtotal</p> */}
                  <p
                    className={classes.headingText}
                    style={{ color: "rgb(112, 112, 112)" }}
                  ></p>
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
                  <p
                    className={classes.headingText}
                    style={{ color: "#FF3C3C" }}
                  >
                    {" "}
                    Total
                  </p>
                  <p
                    className={classes.headingText}
                    style={{ color: "#FF3C3C" }}
                  >
                    {productsprice}
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
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
