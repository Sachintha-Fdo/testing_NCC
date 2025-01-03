export const sendToken = (user, statusCode, res, message) => {

  console.log("JWT Tocken ------------");
  console.log(process.env.COOKIE_EXPIRE);
  
  
  const token = user.getJWTToken();
  console.log(token);
  
  const options = {
    expires: new Date(
      Date.now() + 25 * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  console.log(options);
  
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
