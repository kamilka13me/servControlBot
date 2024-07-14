import { executeCommand } from "../shhService/shhService.js";

export const getPM2Status = async () => {
  const result = await executeCommand("pm2 jlist");
  return JSON.parse(result);
};

export const executePM2Command = async (command, id) => {
  await executeCommand(`pm2 ${command} ${id}`);
};
