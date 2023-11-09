import * as yup from "yup";

export const resetSchema = yup.object({
  code: yup.string().required("Please Enter your verification code"),
  newpassword: yup.string().required("Please Enter your new password"),
});
