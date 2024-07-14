const loggerMiddleware = async (ctx, next) => {
  if (ctx.message && ctx.message.text) {
    console.log(`Received message: ${ctx.message.text}`);
  }
  await next();
};

export default loggerMiddleware;
