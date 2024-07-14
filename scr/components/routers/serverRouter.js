import { pm2Keyboard } from "../../keyboards/keyboards.js";
import { getStatus } from "../controllers/pm2Controller.js";
import { handleSudoCommand } from "../controllers/serverController.js";

const serverRoutes = (bot) => {
  bot.hears(/^sudo\s+/, handleSudoCommand);
};

export default serverRoutes;
