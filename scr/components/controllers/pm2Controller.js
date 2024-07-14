import { pm2Keyboard } from "../../keyboards/keyboards.js";
import { executePM2Command, getPM2Status } from "../../services/pm2Service/pm2Service.js";
// import { pm2Keyboard } from "@keyboards

const getStatus = async (ctx) => {
  try {
    const status = await getPM2Status();
    const statusMessage = status
      .map((proc) => `${proc.pm_id}: ${proc.name} - ${proc.pm2_env.status}`)
      .join("\n");
    await ctx.reply(`Статус PM2:\n${statusMessage}`, {
      reply_markup: { keyboard: pm2Keyboard.build() },
    });
  } catch (error) {
    await ctx.reply(`Ошибка: ${error.message}`, {
      reply_markup: { keyboard: pm2Keyboard.build() },
    });
  }
};

export { getStatus };
