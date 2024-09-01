function parseCustomCSS(cssInput) {
    // Basic tokenizer: splits the input by spaces, curly braces, semicolons, etc.
    const tokens = cssInput.match(/[@\w-]+|[{;}()=<>!&|]+/g);

    let jsCode = '';
    let inCondition = false;
    let inSelector = false;
    let currentCondition = '';
    let currentSelector = '';

    tokens.forEach(token => {
        // Handle condition starts (e.g., if (mode == 'Dark'))
        if (token === 'if' || token === 'else if') {
            inCondition = true;
            currentCondition = '';
        }
        else if (token === 'else') {
            jsCode += `else {\n`;
        }
        else if (inCondition && (token === '(' || token === ')')) {
            // Ignore parentheses in condition tokens
        }
        else if (inCondition && token !== '{') {
            currentCondition += token;
        }
        else if (inCondition && token === '{') {
            jsCode += `if (${currentCondition.trim()}) {\n`;
            inCondition = false;
        }
        // Handle selector
        else if (token.startsWith('.')) {
            currentSelector = token;
            inSelector = true;
        }
        // Handle property:value pairs within a selector block
        else if (inSelector && token === '{') {
            jsCode += `document.querySelectorAll('${currentSelector}').forEach(el => {\n`;
        }
        else if (inSelector && token === '}') {
            jsCode += '});\n';
            inSelector = false;
        }
        else if (token.includes(':')) {
            const [property, value] = token.split(':');
            jsCode += `  el.style['${property.trim()}'] = '${value.trim()}';\n`;
        }
    });

    return jsCode;
}

// Example usage:
const cssInput = `
@-moz-document domain("moodle.bbbaden.ch") {
    .card-img {
        if (mode == 'Dark') {
            filter: invert(90%);
        }
    }
}`;

console.log(parseCustomCSS(cssInput));
