const commander = require("commander");
const chalk = require("chalk");

exports.imageSampler = (function() {
    commander
        .option("-s, --small [small]", "small size image (400x300)")
        .option("-m, --medium [medium]", "medium size image (800x600)")
        .option("-l, --large [large]", "large size image (1280x960)")
        .option("-c, --custom <size>", "custom size image (ex) 200x300")
        .action(function(size){
            const UNSPLASH_SOURCE_URL = "https://source.unsplash.com/random";
            const SMALL_URL = `${UNSPLASH_SOURCE_URL}/400x300`;
            const MEDIUM_URL = `${UNSPLASH_SOURCE_URL}/800x600`;
            const LARGE_URL = `${UNSPLASH_SOURCE_URL}/1200x960`;

            if (commander.custom) {
                const validSizeOptRegEx = /^[1-9][0-9][0-9]?[0-9]?x[1-9][0-9][0-9]?[0-9]?/;
                if (!validSizeOptRegEx.test(commander.custom)) {
                    console.error(chalk.red("invalid size option! please enter size value as '{width}x{height}' format"))
                } else {
                    console.log(chalk.cyan(`${UNSPLASH_SOURCE_URL}/${commander.custom}`));
                }
            }

            if (commander.small) {
                console.log(chalk.cyan(SMALL_URL));
            } else if (commander.medium) {
                console.log(chalk.cyan(MEDIUM_URL));
            } else if (commander.large) {
                console.log(chalk.cyan(LARGE_URL));
            } else {
                console.log(chalk.cyan(UNSPLASH_SOURCE_URL));
            }
        })
        .parse(process.argv);
})();