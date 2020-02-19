const Discord = require('discord.js');
const token = 'Njc3OTk5NjgxNTI3MjE4MjA4.Xk1rVQ.zgaRGKjQpNZ7Ejl7XlU00A-1108';
const bot = new Discord.Client();
const prefix = "+";

bot.on('ready', () => {
    console.log('Bot is started.')

    bot.user.setActivity(`+help || Playing in 5 servers.`, {type: "PLAYING"})
});

bot.on('message', msg => {
    if (msg.content === `${prefix}coinflip`) {

        let responses = ['Heads.',
                         'Tails.']

        let result = Math.floor((Math.random() * responses.length));

        const coinembed = new Discord.MessageEmbed()
        .setAuthor(`Coinflip Result`)
        .setFooter(`Coin was flipped by ${msg.author.tag}`)
        .setColor('#7FFFD4')
        .addField('Result', responses[result]);

        msg.reply(coinembed);
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}help`) {

        const helpembed = new Discord.MessageEmbed()
        .setAuthor('Commands')
        .setFooter('Commands are updated regularly.')
        .setColor('#FF8C00')
        .addField('+help', 'Displays a list of current commands.')
        .addField('+coinflip', 'Flips a coin. You either get heads or tails.')
        .addField('+version', 'Displays the current bot version, updated every time I save an add more than 10 characters to the APi.')
        .addField('+giveaway [item] [days]', 'Starts a giveaway for set item, for set days.')
        .addField('+clear [val]', 'Clears messages according to a numerical input.')
        .addField('+fax', 'Provides a random fact.')
        .addField('+hack [user]', 'Provides the users account info to the server, which is not real info.')
        .addField('+support', 'Sends the support server.')
        .addField('+bump', 'Bumps your server to other TwoBit servers.')
        .addField('+warn', 'Warns a user.')
        .addField('+cancelpremium', 'Cancels premium membership.')
        .addField('+premiumhelp', 'Provides help on premium levels.')
        .addField('+work', 'Lets you work for Bitbux.')
        .addField('+kick [user] [reason]', 'Kicks a user')

        msg.channel.send(helpembed);
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}version`) {
        msg.channel.send('Current Version: **2.0.0*')
    }
});

bot.on('message', msg => {
        let args = msg.content.substring(prefix.length).split(" ");

        switch(args[0]){
            case 'giveaway' :
            let reward = args[1];
            let time = args[2];

            if(!reward) return msg.channel.send('Provide an item to give away!');
            if(!time) return msg.channel.send('Provide a time (in days) for the giveaway!')
            if(!msg.member.hasPermission("ADMINISTRATOR")) return ('You don\'t have the permissions to do this!')


            let giveawayembed = new Discord.MessageEmbed()
            .setAuthor('Giveaway! 🎉🎉')
            .setFooter('Giveaway hosted by' + msg.author.tag)
            .setColor('#FF1493')
            .addField('Contents', 'The Item being given away is: **' + reward + '**')
            .addField('How to enter', 'React with "🎉"')
            .addField('Time left', 'Giveaway ends in **' + time + '** days!')

            msg.channel.send(giveawayembed).then(msg =>{
                msg.react('🎉');
            msg.channel.send('If your item comes out incorrectly, clump the item into one phrase.')

            });
        }
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'clear' :
        msg.delete();
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply('You don\'t have administrator perms!')
        if(!args[1]) return msg.reply('Please input a numerical value so I can clear messages accordingly.')
        msg.channel.bulkDelete(args[1]).then ;{
            msg.channel.send(`Deleted ${args[1]} messages!`).then(msg => {
                msg.react("✅");
            })
        }
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}fax`) {

        let facts = ['The scientific term for brain freeze is “sphenopalatine ganglioneuralgia”.',
                     'The only letter that doesn’t appear on the periodic table is J.',
                     'Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon.',
                     'In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola.',
                     'A single strand of Spaghetti is called a “Spaghetto”.',
                     'The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation.',
                     'Iceland does not have a railway system.',
                     'The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1',
                     'There is a boss in *Metal Gear Solid 3* that can be defeated by not playing the game for a week; or by changing the date.',
                     'In Svalbard, a remote Norwegian island, it is illegal to die.']

        let result = Math.floor((Math.random() * facts.length));

        msg.channel.send(facts[result]);
    }
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'hack' :
        let user = msg.mentions.users.first();

        if(!user) return msg.reply('Please provide a user to hack.')
        if(!msg.member.hasPermission("SEND_MESSAGES")) return msg.reply('You cannot do this.')

        let emails = ['ajax23@gmail.com',
                      'GJJAXBE@yahoo.com',
                      'immortaltrooper7@gmail.com',
                      'tiktok50@7m.pl',
                      'javagdps1@ueuo.com',
                      'coolaidkid@gmail.com',
                      'kingpengui24@gmail.com',
                      'abutavast5@yahoo.com']

        let emailresult = Math.floor((Math.random() * emails.length))

        let passwords = ['098ru293rju',
                         'yourmom-0328ri',
                         'konpi.ru0-3',
                         'tictacmaster',
                         'morgz32423',
                         'manmezz',
                         'pp03930920',
                         'avast23']

        let passwordresult = Math.floor((Math.random() * passwords.length));

        msg.channel.send('Gathering info.')

        msg.channel.send('Information Gathered.')

        const hackembed = new Discord.MessageEmbed()
        .setAuthor(`Information for ${user.tag}`)
        .setFooter('Disclaimer: This is just for the sh*ts and giggles, don\'t take this seriously.')
        .setColor('#7FFFD4')
        .addField('Email: ', emails[emailresult])
        .addField('Username: ', user.tag)
        .addField('Password: ', passwords[passwordresult])

        msg.channel.send(hackembed)
        msg.channel.send('Enjoy!');
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}support`) {
        msg.channel.send('*Join the Support Server!* **https://discord.gg/UrvRbAT**')
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}choosewinner`) {
        msg.delete()
        msg.channel.send('Congratulations **BananaMonster_999#9999**! You won the: **Supremium**').then(msg => {
            msg.react('👏');
        })
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}bump`) {
        msg.delete()

        let messages = ['Now we wait...',
                        'Have fun!',
                        'This should work',
                        'Now try hacking a member, using +hack [user]',
                        'Follow the creator on twitter: @java_leaf',
                        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        'Sub to butterflux on YT']

        let messagesend = Math.floor((Math.random() * messages.length));

        const bumpembed = new Discord.MessageEmbed()
        .setAuthor('Bump Successful.')
        .setFooter('Bumps can be spammed, I request you dont.')
        .addField('Server Bumped!', messages[messagesend])

        msg.channel.send(bumpembed);
    }
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'warn' :
        let warnuser = msg.mentions.users.first();
        let reason = args[2]

        if(!warnuser) return msg.reply('Who are you warning?')
        if(!reason) return msg.reply('Please provide a reason for the warn!')
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.reply('You don\'t have permissions to warn a user!')

        msg.channel.send(`${warnuser.tag} was warned for ${reason}.`).then(msg => {
            msg.react('✅');
        })
    }
});

bot.on('message', msg => {
    if(msg.content === `${prefix}gencode`){

        msg.delete();

        let codes = ['tJFcuBR9O',
                     'eTrJHpump',
                     'NF8uSVaK1',
                     'dp8w6rMNh',
                     'Vg0AkQlmF',
                     'idwoieEWE',
                     'riofrejeE',
                     'tuwf0Rvoi']

        let finalcode = Math.floor((Math.random() * codes.length));

        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send('You cannot generate a code!')

        msg.channel.send('Your code is: `' + codes[finalcode] + '`')

        let args = msg.content.substring(prefix.length).split(" ");
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}cancelpremium`){
        msg.channel.send(`${msg.author.tag}'s Supremium Membership was cancelled.`)
    }
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'premium' :
        let entercode = args[1]

        msg.delete();

        if(!entercode) return msg.channel.send('Please enter a code.')

        msg.channel.send('Code redeemed! Have fun!')
    
        let preinfoembed = new Discord.MessageEmbed()
        .setAuthor('Premium Info.')
        .setColor('#F0E68C')
        .setDescription('Basic info on your Premium Membership.')
        .addField('Early Access', 'Early access to test commands in testing channels on the support server.')
        .addField('Hidden Channels', 'Access to hidden channels on the support server.')

        msg.channel.send(preinfoembed);
        msg.channel.send('If you have not, join the support server: https://discord.gg/UrvRbAT')
    }
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'supremium' :
        let entercode = args[1]

        msg.delete();

        if(!entercode) return msg.channel.send('Please enter a code.')

        msg.channel.send('Code redeemed! Have fun!')
    
        let preinfoembed = new Discord.MessageEmbed()
        .setAuthor('Supremium Info.')
        .setColor('#F0E68C')
        .setDescription('Basic info on your Supremium Membership.')
        .addField('Early Access', 'Early access to test commands in testing channels on the support server.')
        .addField('Hidden Channels', 'Access to hidden channels on the support server.')
        .addField('Administrator Perms', 'You gain admin perms on the support server.')
        .addField('Daily Bitbux', '[BETA] Access to a 500 daily Bitbux reward.')
        .addField('Premium Generation', 'View the premium generation.')

        msg.channel.send(preinfoembed);
        msg.channel.send('If you have not, join the support server: https://discord.gg/UrvRbAT')
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}premiumhelp`){

        let prehelp = new Discord.MessageEmbed()
        .setAuthor('Premium Info.')
        .addField('Premium', 'Normal premium, with normal benefits. Can be bought for $1.50.')
        .addField('Supremium', 'Premium with more benefits, can be bought for $5 USD.')
        .addField('Nitro Premium', 'Given by Nitro Boosting the server.')

        msg.channel.send(prehelp);
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}daily`){
        msg.channel.send(`${msg.author}, you have recieved your daily reward.`)
    }
});

bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'add-bitbux' :
        let target = msg.mentions.users.first();
        let amt = args[2]

        if(!target) return msg.reply('Please target a user to give Bitbux to!')
        if(!amt) return msg.reply('Please define an amount to give to the user.')
        if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send('You must be an admin to give someone Bitbux.')

        msg.channel.send(`${target} was given ${amt} Bitbux by ${msg.author} `)
    }
});

bot.on('message', msg => {
    if (msg.content === `${prefix}work`){

        let jobs = ['You helped granny make cookies. You got 3 cookies and 100 Bitbux.',
                    'You worked 9 to 5 at a Gas Station for 2 years. Your total earning are 250 Bitbux.',
                    'You helped butterflux program Twobit for 10 months. You earn 1,050 Bitbux.',
                    'You gave your personal info to your Nigerian Prince Uncle. In return you win 10,500 Bitbux.',
                    'You work at a burger joint for 10 years. You earn 2,340 Bitbux.',
                    'You make a bestselling 2d platformer game. You earn 12,500 Bitbux.',
                    'You work at Mario\'s Pizzeria, and get robbed out of 1,250 Bitbux',
                    'You volunteer to fight in WWIII and your team wins. You earn 100,000 Bitbux',
                    'You work as a Pornography Cameraman, you earn 250 Bitbux.',
                    'You work as a Pornstar, in return you get 500 Bitbux',
                    'You start a photography business, it is your passion. You start earning 250 Bitbux a day.',
                    'You start streaming on twitch, you are banned but earn 2,500 from donations and subscribers.',
                    'You make bananas for BananaMonster_999. You earn 2,000 Bitbux and get to keep 2 bananas.']

        let outcome = Math.floor((Math.random() * jobs.length));

        msg.channel.send(jobs[outcome])
    }
});

bot.on("message", (message) => {
    if (message.content.startsWith("+kick")) {
        let args = message.content.substring(prefix.length).split(" ");
        // Easy way to get member object though mentions.
        var member = message.mentions.members.first();
        var reason = args[2];
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send("✅ " + member.displayName + " has been successfully kicked for **" + reason + "** ✅");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});
        
bot.on('message', msg => {
    let args = msg.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'say' :
        let string = args[1]

        if(!string) return msg.channel.send('What do you want me to say?')

        msg.channel.send(string)
    }
});

bot.login(token);
