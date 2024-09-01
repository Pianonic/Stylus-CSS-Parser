# 🛠️ Stylus to JavaScript Parser

This project is a parser that converts custom Stylus CSS with conditional logic into JavaScript code. It allows you to define styles using the Stylus syntax and conditionally apply them based on specific variables or conditions.

## 🚀 Features

- **Tokenization**: Breaks down Stylus input into manageable tokens.
- **Parsing**: Converts tokens into an abstract syntax tree (AST) or a similar structure.
- **JavaScript Generation**: Outputs equivalent JavaScript code to apply styles based on conditions.

## 📝 Example Usage

Here’s how you can use the parser in your project:

### Input
```stylus
.card-img
  if mode == 'Dark'
    filter invert(90%)
```

### Output
The parser converts the above Stylus input into the following JavaScript:

```javascript
if (mode == 'Dark') {
    document.querySelectorAll('.card-img').forEach(el => {
        el.style['filter'] = 'invert(90%)';
    });
}
```

## 🔧 How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/stylus-js-parser.git
   cd stylus-js-parser
   ```

2. **Include the parser in your project**:
   Simply copy the `parseStylus` function into your JavaScript project.

3. **Call the function with your Stylus input**:
   ```javascript
   const stylusInput = `
   .card-img
     if mode == 'Dark'
       filter invert(90%)
   `;

   const jsCode = parseStylus(stylusInput);
   console.log(jsCode);
   ```

4. **Enjoy dynamically applying styles based on conditions** 🎉

## 🤔 Why Use This?

This parser is particularly useful if you want to:

- Apply styles based on different modes (e.g., Dark Mode) using Stylus.
- Dynamically change styles based on conditions in your JavaScript code.
- Simplify the management of complex style rules in your project.

## 🛠️ Future Enhancements

Some potential improvements include:

- **Nested condition handling**: Support for more complex and nested conditions.
- **Improved error handling**: Better detection and reporting of syntax errors.
- **Optimization**: Enhanced performance and flexibility for various Stylus syntaxes.

## 🏗️ Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request. Check out the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
