import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { CustomInput } from "../../common/Input/CustomInput";
import classes from "./CheckoutPage.module.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import schema from "../../schemas/CheckoutSchema";

import { images } from "../../utils/Images";

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
    quantity: 1,
  },
  {
    image: images.product4,
    price: 20,
    rating: 5,
    title: "Ear pods",
    quantity: 1,
  },
];

const initialValues = {
  firstname: "", //  should be same as name attribute
  lastname: "",
  shippingaddress: "",
  city: "",
  country: "",
  province: "",
  postcode: "",
  email: "",
};

export const CheckoutPage = () => {
  const onPayment = () => {
    navigate("/payment");
  };
  const { handleChange, values, handleSubmit, handleBlur, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,

      onSubmit: (values, action) => {
        console.log(values);

        alert(" Submitted Successfully");
        action.resetForm();
        onPayment();
      },
    });

  const invalitStyle = {
    color: "red",
    textAlign: "start",
    fontSize: ".7vw",
  };
  const navigate = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
      <div className={classes.wrapper}>
        <div className={classes.checkoutContainer}>
          <div className={classes.mainHeading}>CHECKOUT</div>
          <div className={classes.header}>
            <p style={{ marginLeft: "1vw" }} className={classes.headingText}>
              BILLING DETAILS
            </p>
            <p
              style={{ marginRight: "10vw", width: "10vw" }}
              className={classes.headingText}
            >
              YOUR ORDER
            </p>
          </div>
          <div className={classes.productsContainer}>
            <div className={classes.formContainer}>
              <form style={{ width: "54vw" }} onSubmit={handleSubmit}>
                {/* {==========} */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      marginTop: ".7vw",
                      gap: "2vw",
                    }}
                    className={classes.rowForm}
                  >
                    <CustomInput
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      inputstyle={{ width: "100%" }}
                      placeholder={"First name"}
                      touched={touched?.firstname}
                      errors={errors?.firstname}
                      invalitStyle={invalitStyle}
                    />

                    <CustomInput
                      type="text"
                      id="Lastname"
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // inputstyle={{ width: "26.3vw" }}
                      inputstyle={{ width: "100%" }}
                      placeholder={"Last name"}
                      touched={touched?.lastname}
                      errors={errors?.lastname}
                      invalitStyle={invalitStyle}
                    />
                  </div>
                  {/* {==========} */}
                  <div
                    style={{ marginTop: ".7vw" }}
                    className={classes.columnForm}
                  >
                    <div style={{ marginBottom: ".7vw", width: "100%" }}>
                      <CustomInput
                        inputstyle={{ width: "54vw" }}
                        placeholder={"Shipping Address"}
                        type="text"
                        id="Shippingaddress"
                        name="shippingaddress"
                        value={values.shippingaddress}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched?.shippingaddress}
                        errors={errors?.shippingaddress}
                        invalitStyle={invalitStyle}
                      />
                    </div>

                    <CustomInput
                      inputstyle={{ width: "54vw" }}
                      placeholder={"City"}
                      type="text"
                      id="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.city}
                      errors={errors?.city}
                      invalitStyle={invalitStyle}
                    />
                  </div>

                  {/* {====================} */}
                  <div
                    style={{ gap: "2vh", marginTop: ".7vw", width: "100%" }}
                    className={classes.rowForm}
                  >
                    <CustomInput
                      inputstyle={{ width: "100%" }}
                      placeholder={"Country"}
                      type="text"
                      id="Country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.country}
                      errors={errors?.country}
                      invalitStyle={invalitStyle}
                    />

                    <CustomInput
                      inputstyle={{ width: "100%" }}
                      placeholder={"Province"}
                      type="text"
                      id="Province"
                      name="province"
                      value={values.province}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.province}
                      errors={errors?.province}
                      invalitStyle={invalitStyle}
                    />
                  </div>
                  {/* {================} */}
                  <div
                    style={{ marginTop: ".7vw", width: "100%" }}
                    className={classes.columnForm}
                  >
                    <div style={{ marginBottom: ".7vw", width: "100%" }}>
                      <CustomInput
                        inputstyle={{ width: "54vw" }}
                        placeholder={"Post Code/ Zip"}
                        type="text"
                        id="Postcode"
                        name="postcode"
                        value={values.postcode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched?.postcode}
                        errors={errors?.postcode}
                        invalitStyle={invalitStyle}
                      />
                    </div>

                    <CustomInput
                      inputstyle={{ width: "54vw" }}
                      placeholder={"Email Address"}
                      type="text"
                      id="Email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched?.email}
                      errors={errors?.email}
                      invalitStyle={invalitStyle}
                    />
                  </div>
                </div>
                <div className={classes.buttonContainer}>
                  <button className={classes.btnBackToShopping}>
                    <div className={classes.btnText}>BACK TO SHOPPING</div>
                  </button>
                  {/* <button onClick={onPayment} className={classes.btnPayment}> */}
                  <button type="submit" className={classes.btnPayment}>
                    <div className={classes.btnText}>PAYMENT</div>
                  </button>
                </div>
              </form>
            </div>
            <div className={classes.productsInnerContainer}>
              <div className={classes.productsWrapper}>
                {Dummy_Products.map((product, index) => {
                  return (
                    <div key={index} className={classes.productsItemContainer}>
                      <div>
                        <img
                          className={classes.productImage}
                          src={product.image}
                          alt="product"
                        />
                      </div>
                      <div className={classes.info}>
                        <div>
                          {/* <div className={classes.productName}>
                            {product.title} product Image
                          </div> */}
                          <div className={classes.productName}>
                            Sample product Image
                          </div>
                          {/* <div className={classes.productName}>
                            Quantity: {product.quantity}
                          </div> */}
                          <div className={classes.productName}>Color: Red</div>
                          <div className={classes.productName}>Size: Large</div>
                        </div>
                        <p className={classes.prodPrice}>${product.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className={classes.total}>
                <div>
                  <div
                    style={{ marginTop: "1.5vw" }}
                    className={classes.totalInnerContainer}
                  >
                    <div className={classes.totalText}>Sutotal</div>
                    <div className={classes.semiPrice}>$400</div>
                  </div>
                  <div className={classes.totalInnerContainer}>
                    <div className={classes.totalText}>Shipping</div>
                    <div className={classes.semiPrice}>$20</div>
                  </div>
                </div>
                <div
                  style={{ marginTop: "1.5vw" }}
                  className={classes.totalInnerContainer}
                >
                  <div
                    style={{ fontWeight: "bold", fontSize: "1vw" }}
                    className={classes.totalText}
                  >
                    TOTAL
                  </div>
                  <div className={classes.totalPrice}>$420</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

//implemented Responsice payment page
// responsive checkout pageXOffset
//  layout and implemented laptop responsive navbar
