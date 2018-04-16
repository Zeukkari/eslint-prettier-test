# eslint-prettier notes

A globally-installed instance of ESLint can only use globally-installed ESLint plugins, and locally-installed version can only use locally-installed plugins. Mixing local and global plugins is not supported. Editor extensions such as prettier-atom and prettier-vscode will read .prettierrc, but won't read settings from ESLint, which can lead to an inconsistent experience.


- https://www.npmjs.com/package/prettier-eslint
- https://github.com/yannickcr/eslint-plugin-react
- https://www.npmjs.com/package/eslint-config-prettier
- https://www.npmjs.com/package/eslint-plugin-prettier


## Codeshift

- https://github.com/facebook/jscodeshift
- https://github.com/reactjs/react-codemod

`npx jscodeshift -t react-codemod/transforms/pure-component.js index.js`



## VSCode autoformatting hangup issue
https://github.com/Microsoft/vscode-eslint/issues/380#issuecomment-355981051
