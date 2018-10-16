module.exports = {
    name: 'start',
    description: 'How do I get started',
    execute(message, args) {
        message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author}`))
        .catch(console.error);
        var text = `1) Set Reward Recipient: https://burstneon.com/rewardassignment.html
        This costs only 0.1 burst. 
        Burstneon pool account reward recpient is: BURST-YXZW-JH7M-QKR9-9PKBN
    2) Setting your name in your wallet only costs 0.1 burst
    
    As POC2 is now in effect you need to be using POC2 miner with POC2 plots
    Latest Blago recommend https://github.com/JohnnyFFM/blagominer/releases
    Neon Pools Dashboard http://burstneon.com/ this also has the full guide
    to bursting and to do everything and troubleshoot http://burstneon.com/qbundle.html.`;
        if(message.mentions.users.size === 0) {
             message.reply(text);
           } else{
                let TagedMember = message.guild.member(message.mentions.users.first());
               message.channel.send(`${TagedMember} ${text}`);
           }
    },
};

