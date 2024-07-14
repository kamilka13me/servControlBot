import { Keyboard } from "grammy";

const mainKeyboard = new Keyboard().text("PM2").row().text("Серверные команды").row();

const pm2Keyboard = new Keyboard()
  .text("Статус PM2")
  .row()
  .text("Остановить процесс")
  .row()
  .text("Перезапустить процесс")
  .row()
  .text("Запустить процесс")
  .row()
  .text("Назад")
  .row();

const serverCommandsKeyboard = new Keyboard()
  .text("Перезапуск сервера")
  .row()
  .text("Обновления пакетов")
  .row()
  .text("Обновить проект")
  .row()
  .text("Назад")
  .row();

const updateProjectKeyboard = new Keyboard();

export { mainKeyboard, pm2Keyboard, serverCommandsKeyboard, updateProjectKeyboard };
