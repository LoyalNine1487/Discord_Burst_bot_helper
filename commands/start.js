module.exports = {
    name: 'start',
    description: 'How do I get started',
    execute(message, args) {
        message.reply(`Here is the proper logic:
Goto faucet and get a coin: https://faucet.burstpay.net/
1) Set reward recipient: https://wallet.burst.cryptoguru.org:8125/rewardassignment.html
    For burstneon.com, recipient is: BURST-YXZW-JH7M-QKR9-9PKBN
2) Mine and earn some coins.
3) Set your name when you finally have some coins.
In other words, you can mine without setting your name. Don't waste your first coin on that.
Let setting the reward assignment be yout first transaction.`);
    },
};