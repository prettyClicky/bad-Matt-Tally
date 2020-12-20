const questions = [
    "Did Matt make a bad pun?",
    "Did Matt use a bad pickup line?",
    "Did Matt sing 'The Bad Touch' at karaoke?",
    "Did Matt wear flamboyant shorts?",
    "Did Matt play 'Old Town Road' more than once?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    points = 0; 
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == 'yes') {
            points += 1;
        };
    };

    console.log(`
    
    Sorry you were the victim of Matthew's social awkwardness.
    Matthew currently has ${points} points.
    `);
});