import { Bot, session } from "grammy";
import { config } from "./scr/config/config.js";
import authMiddleware from "./scr/midleware/auth.js";
import loggerMiddleware from "./scr/midleware/logger.js";
import pm2Routes from "./scr/components/routers/pm2Router.js";
import serverRoutes from "./scr/components/routers/serverRouter.js";

const bot = new Bot(config.apiKey);

const adminId = parseInt(process.env.ADMIN_ID, 10);

bot.use(session({ initial: () => ({}) }));
bot.use(loggerMiddleware);
bot.use(authMiddleware(adminId));

// pm2Routes(bot);
serverRoutes(bot);
pm2Routes(bot);
// serverRoutes(bot);
// projectRoutes(bot);

bot.start();
