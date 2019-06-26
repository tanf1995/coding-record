function parseExpression(program){
    program = skinSpace(program);
    let match, expr;
    if(match = /^"([^"]*)"/.exec(program)){
        expr = { type: "value", value: match[1] };
    } else if(match = /^\d+\b/.exec(program)){
        expr = { type: "value", value: Number(match(0)) };
    } else if(match = /^[^\s(),"]+/.exec(program)){
        expr = { type: "word", name: match[0] };
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }
}

function skipSpace(string) {
    let first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
}

function parseApply(expr, program){
    program = skipSpace(program);
    if(program[0] != "("){
        return { expr: expr, rest: program };
    }

    program = skinSpace(program.slice(1));
    expr = { type: "apply", operator: expr, args: [] };
    while (program[0] != ")"){
        let arg = parseExpression(program);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if(program[0] == ","){
            program = skinSpace(program.slice(1));
        } else if(program[0] != ")"){
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}


let program = `
    do(define(x, 10),
        if(>(x, 5),
        print("large"),
        print("small")))
`