const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

if(message.member.hasPermission("ADMINISTRATOR")) {

  if(!args[1]){
    return message.channel.send(":x: " + "| Please enter a new name for me!");
  }
  message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send("My New NickName is " + args.join(" ") + "!")).catch(console.error);
} else {
  return message.reply(":x: " + "| You need to have the \"ADMINISTRATOR\" Permission")
  }
}

module.exports.help = {
    name: "rename"
}