var lastString = "";
var addLevel;
var stack = [];

function parse(data, cb) {
     var lead = true;
     var inString = false;
     var inEscape = false;
     var inComment = false;
     var line = 1;
   
     addLevel = true;
     for (var i = 0; i < data.length; i++) {
        var ch = data.charAt(i);
        if (ch === '\n') {
            line ++;
        }
        if (lead && (ch != '{')) {
            continue;
        }
        lead = false;
        if ((inString !== false) && (ch === '\\')) {
            inEscape = true;
            continue;
        }
        if (inEscape) {
            inEscape = false;
            continue;
        }
        if (inComment && ch !== '\n') {
            continue;
        } else {
            inComment = false;
        }
        if ((ch === '/') && (inString === false)) {
            if (data.charAt(i+1) === '/') {
                inComment = true;
            }
        }
        if (ch === '\'') {
            if (inString !== false) {
                got_string(inString);
                inString = false;
            } else {
                inString = "";
                continue;
            }
        }
        if ((ch === '{') && (inString === false)) {
            got_in();
        }
        if ((ch === '}') && (inString === false)) {
            got_out();
        }
        if ((ch === ':') && (inString === false)) {
            got_colon(line, cb);
        }
        if ((ch === ',') && (inString === false)) {
            got_coma();
        }
        if (inString !== false) {
            inString += ch;
        }
        
     }
}

function got_in() {
    addLevel = true;
}

function got_out() {
    if (!addLevel) stack.pop(); 
    addLevel = false;
}

function got_string(s) {
    lastString = s;
}

function got_colon(line, cb) {
    if (!addLevel) {
        stack.pop(); 
    }
    stack.push(lastString); 
    addLevel = false;
    if (typeof cb === "function") {
        cb(stack.join("."), line);
    }
}

function got_coma() {
}

module.exports = parse;
