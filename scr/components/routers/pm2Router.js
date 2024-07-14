import { pm2Keyboard } from "../../keyboards/keyboards.js";
import { getStatus } from "../controllers/pm2Controller.js";

const pm2Routes = (bot) => {
  bot.hears("PM2", async (ctx) => {
    await ctx.reply("Выберите действие для PM2:", {
      reply_markup: { keyboard: pm2Keyboard.build() },
    });
  });

  bot.hears("Статус PM2", getStatus);
};

export default pm2Routes;
