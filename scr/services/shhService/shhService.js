import { exec } from "child_process";

export const executeCommand = async (command, cwd) => {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
};
