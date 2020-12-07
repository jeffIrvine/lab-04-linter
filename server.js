const express = require('express');
const { Stack } = require('./stack');
const { stripper } = require('./stripper');
const app = express();

app.use(express.json());

// request handler
app.post('/api/v1/lint', (req, res) => {
    const stack = new Stack();
    const brackets = stripper(req.body.lint);
    let result = true;
    const hashMap = {
        '(':')',
        '[':']',
        '{':'}',
        ')':'(',
        ']':'[',
        '}':'{'
    }
    brackets.forEach(bracket => {
        if(bracket === '{' || bracket === '[' || bracket === '(') {
            stack.push(bracket);
        } else {
            const topPlate = stack.peek();
            if(topPlate === '{' && bracket === '}') {
                stack.pop();
            } else if(topPlate === '[' && bracket === '}') {
                stack.pop();
            } else if(topPlate === '(' && bracket === ')') {
                stack.pop();
            } else {
                result = `missing: ${bracket}`;
            };
        }
        if(stack.peek()){
            result = {
                missing: hashMap[stack.peek()]
            }
        }
    })
    res.send(result);
})

app.get('/', (req, res) => {
    
})

app.listen(7890, () => {
    console.log('started on 7890');
});
