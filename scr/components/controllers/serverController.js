import { executeCommand } from "../../services/shhService/shhService.js";

export const handleSudoCommand = async (ctx) => {
  const message = ctx.message.text;
  const command = message.replace(/^sudo\s*/, ""); // Видаляємо "sudo" з початку повідомлення
  try {
    const result = await executeCommand(command);
    await ctx.reply(`Команда виконана:\n${result}`);
  } catch (error) {
    await ctx.reply(`Помилка при виконанні команди:\n${error.message}`);
  }
};
