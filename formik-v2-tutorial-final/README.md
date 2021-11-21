## formik-v2-tutorial-final

For basic forms in react, see:
https://github.com/dieterm/react-complete-guide-code/tree/16-working-with-forms

Original Source code (of this project):
https://codesandbox.io/s/formik-v2-tutorial-final-ge1pt

![Form screenshot](docs/form_screenshot.PNG)

Uses `yup` and `yup-ast` library to define the form input validation rules

`AST` stands for 'Abstract syntax tree' -> see https://en.wikipedia.org/wiki/Abstract_syntax_tree

Library `json-schema-yup-transformer` [https://www.npmjs.com/package/json-schema-yup-transformer] is used to convert a json object schema to yup schema.

Use website https://www.jsonschemavalidator.net/ to validate your schema object

To convert json schema to YUP schema, See example (not implemented yet):

https://codesandbox.io/s/zdlcl?file=/src/index.js:47-102

Possible conversion overview (not implemented):

![Global picture](docs/data-flow.png)
