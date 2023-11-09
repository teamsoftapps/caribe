import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { CustomInput } from "../../common/Input/CustomInput";

import classes from "./Paymentpage.module.css";

import { images } from "../../utils/Images";
import { useFormik } from "formik";
import paymentSchema from "../../schemas/PaymentSchema";
import { Navigate, useNavigate } from "react-router-dom";

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
  cardnumber: "",
  name: "",
  securitycode: "",
  expiration: "",
};

const invalitStyle = {
  color: "red",
  textAlign: "start",
  fontSize: ".7vw",
};

export const PaymentPage = () => {
  const navigate = useNavigate();
  const onConfirmSubmission = () => {
    navigate("/");
  };
  const { handleBlur, handleChange, touched, values, errors, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: paymentSchema,
      onSubmit: (values, action) => {
        console.log(values);
        alert("Subbmitted Successfully");
        action.resetForm();
        onConfirmSubmission();
      },
    });

  return (
    <div>
      <Navbar></Navbar>
      <div className={classes.wrapper}>
        <div className={classes.checkoutContainer}>
          <div className={classes.mainHeading}>PAYMENT</div>
          <div className={classes.header}>
            <p style={{ marginLeft: "1vw" }} className={classes.headingText}>
              SHOPPING IMFORMATION
            </p>
            <p
              style={{ marginRight: "12vw", width: "10vw" }}
              className={classes.headingText}
            >
              YOUR ORDER
            </p>
          </div>
          <div className={classes.productsContainer}>
            <div className={classes.formContainer}>
              <form style={{ width: "55vw" }} onSubmit={handleSubmit}>
                <div className={classes.informationContainer}>
                  <p className={classes.changeInfo}>Change</p>
                  <div className={classes.InformationCard}>
                    <div className={classes.InformationInnerCard}>
                      <div className={classes.informationInnerWrapper}>
                        <div className={classes.informationHeading}>
                          Contact
                        </div>
                        <div className={classes.informationText}>
                          youremail@gmail.com
                        </div>
                      </div>
                      <div>
                        <hr className={classes.line} />
                      </div>
                    </div>
                    <div className={classes.InformationInnerCard}>
                      <div className={classes.informationInnerWrapper}>
                        <div className={classes.informationHeading}>
                          Ship to
                        </div>
                        <div className={classes.informationText}>
                          Addrerss - City,Country
                        </div>
                      </div>
                      <div>
                        <hr className={classes.line} />
                      </div>
                    </div>
                    <div className={classes.InformationInnerCard}>
                      <div className={classes.informationInnerWrapper}>
                        <div className={classes.informationHeading}>Method</div>
                        <div className={classes.informationText}>
                          $420,000
                          <span className={classes.methodDetails}>
                            (International shipping)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "start",
                    marginLeft: "1vw",
                    fontWeight: "bold",
                    fontSize: "1.2vw",
                    marginTop: "1.5vw",
                  }}
                >
                  YOUR CREDIT CARD
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    width: "100%",
                  }}
                >
                  <div style={{ width: "100%" }} className={classes.columnForm}>
                    <div style={{ marginTop: ".7vw ", width: "100%" }}>
                      <CustomInput
                        // inputstyle={{ width: "54vw" }}
                        inputstyle={{ width: "100%" }}
                        placeholder={"Card Number"}
                        type="text"
                        id="cardnumber"
                        name="cardnumber"
                        value={values.cardnumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        touched={touched?.cardnumber}
                        errors={errors?.cardnumber}
                        invalitStyle={invalitStyle}
                      />
                    </div>
                    <div
                      style={{
                        marginTop: ".7vw",
                        marginBottom: ".7vw",
                        width: "100%",
                      }}
                    >
                      <CustomInput
                        // inputstyle={{ width: "54vw" }}
                        inputstyle={{ width: "100%" }}
                        placeholder={"Name on Card"}
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        touched={touched?.name}
                        errors={errors?.name}
                        invalitStyle={invalitStyle}
                      />
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "2vw",
                      width: "100%",
                      // justifyContent: "space-between",
                    }}
                    className={classes.rowForm}
                  >
                    <CustomInput
                      inputstyle={{ width: "100%" }}
                      placeholder={"Expiration (MM/ YY)"}
                      type="text"
                      id="expiration"
                      name="expiration"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.expiration}
                      touched={touched?.expiration}
                      errors={errors?.expiration}
                      invalitStyle={invalitStyle}
                    />

                    <CustomInput
                      inputstyle={{ width: "100%" }}
                      placeholder={"Security code"}
                      type="text"
                      id="securitycode"
                      name="securitycode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.securitycode}
                      touched={touched?.securitycode}
                      errors={errors?.securitycode}
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
