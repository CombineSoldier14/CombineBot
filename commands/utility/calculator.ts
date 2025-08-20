const { SlashCommandBuilder } = require('discord.js');

// Simple, safe arithmetic parser using shunting-yard algorithm
function safeEval(expr: string): number {
    // Remove spaces
    expr = expr.replace(/\s+/g, '');

    // Tokenize
    const tokens = expr.match(/(\d+(\.\d+)?)|[\+\-\*\/\^\(\)]/g);
    if (!tokens) throw new Error('Invalid expression');

    // Operator precedence
    const precedence: any = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
    const associativity: any = { '+': 'L', '-': 'L', '*': 'L', '/': 'L', '^': 'R' };

    // Shunting-yard algorithm
    const output: any[] = [];
    const ops: string[] = [];
    for (const token of tokens) {
        if (/^\d+(\.\d+)?$/.test(token)) {
            output.push(parseFloat(token));
        } else if ('+-*/^'.includes(token)) {
            while (
                ops.length &&
                '+-*/^'.includes(ops[ops.length - 1]) &&
                (
                    (associativity[token] === 'L' && precedence[token] <= precedence[ops[ops.length - 1]]) ||
                    (associativity[token] === 'R' && precedence[token] < precedence[ops[ops.length - 1]])
                )
            ) {
                output.push(ops.pop());
            }
            ops.push(token);
        } else if (token === '(') {
            ops.push(token);
        } else if (token === ')') {
            while (ops.length && ops[ops.length - 1] !== '(') {
                output.push(ops.pop());
            }
            if (!ops.length) throw new Error('Mismatched parentheses');
            ops.pop();
        } else {
            throw new Error('Invalid token');
        }
    }
    while (ops.length) {
        if (ops[ops.length - 1] === '(' || ops[ops.length - 1] === ')') throw new Error('Mismatched parentheses');
        output.push(ops.pop());
    }

    // Evaluate RPN
    const stack: number[] = [];
    for (const token of output) {
        if (typeof token === 'number') {
            stack.push(token);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case '+': stack.push(a + b); break;
                case '-': stack.push(a - b); break;
                case '*': stack.push(a * b); break;
                case '/': stack.push(a / b); break;
                case '^': stack.push(Math.pow(a, b)); break;
                default: throw new Error('Invalid operator');
            }
        }
    }
    if (stack.length !== 1) throw new Error('Invalid expression');
    return stack[0];
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('calculator')
        .setDescription('Calculate a math expression')
        .addStringOption((option: any) =>
            option
                .setName('expression')
                .setDescription('Math expression to calculate.')
                .setRequired(true)
        ),
    async execute(interaction: any) {
        let expression = `${interaction.options.getString('expression')}`;
        try {
            const result = safeEval(expression);
            interaction.reply(`${result}`);
        } catch (err: any) {
            interaction.reply(`Error: ${err.message}`);
        }
    }
}