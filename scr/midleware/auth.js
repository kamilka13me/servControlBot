const authMiddleware = (adminId) => async (ctx, next) => {
  const userId = ctx.from?.id;
  if (userId === adminId) {
    await next();
  } else {
    await ctx.reply("no acces");
  }
};

export default authMiddleware;
