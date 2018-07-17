module.exports = {
    name: 'burstneon',
    description: 'How do I get started on burstneon',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        var text = `Server: burstneon.com
        Port: 8080
        Reccomended Deadline Limit: 63072000 (This is 2 years)
        If using qbundle wallet, go to: __T__ools -> Miner
        If using the command line in 'miner-burst' folder: edit miner.conf`;
        if(message.mentions.users.size === 0) {
             message.reply(text);
           } else{
                let TagedMember = message.guild.member(message.mentions.users.first());
               message.channel.send(`${TagedMember} ${text}`);
           }
    },
};