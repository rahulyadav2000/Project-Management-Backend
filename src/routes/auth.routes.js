import { Router } from "express";
import {
  registeredUser,
  login,
  logoutUser,
  verifyEmail,
  refreshAccessToken,
  forgotPasswordRequest,
  resetForgotPassword,
  getCurrentUser,
  changeCurrentPassword,
  resendVerificationToken,
} from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  userRegisterValidator,
  userLoginValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
} from "../validators/validator.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidator(), validate, registeredUser);

router.route("/login").post(userLoginValidator(), validate, login);
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken);
router
  .route("/forgot-password")
  .post(userForgotPasswordValidator, validate, forgotPasswordRequest);

router
  .route("/reset-password/:resetToken")
  .post(userResetForgotPasswordValidator, validate, resetForgotPassword);

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/current-user").post(verifyJWT, getCurrentUser);
router.route("/change-password").post(verifyJWT, changeCurrentPassword);
router
  .route("/resend-email-verification")
  .post(verifyJWT, resendVerificationToken);

export default router;
