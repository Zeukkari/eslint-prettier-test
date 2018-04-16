# eslint-prettier notes

A globally-installed instance of ESLint can only use globally-installed ESLint plugins, and locally-installed version can only use locally-installed plugins. Mixing local and global plugins is not supported. Editor extensions such as prettier-atom and prettier-vscode will read .prettierrc, but won't read settings from ESLint, which can lead to an inconsistent experience.


- https://www.npmjs.com/package/prettier-eslint
- https://github.com/yannickcr/eslint-plugin-react
- https://www.npmjs.com/package/eslint-config-prettier
- https://www.npmjs.com/package/eslint-plugin-prettier


# Editor support

Running `eslint-prettier --fix on save` on save.


## Intelli Idea

https://github.com/idok/eslint-plugin/blob/master/README.md

http://plugins.jetbrains.com/plugin/7177-file-watchers

- use file watcher for running `eslint --fix` externally ?
- use eslint plugin for in editor syntax highlighting


## Sublime Text 3

https://github.com/TheSavior/ESLint-Formatter


## VSCode

https://github.com/Microsoft/vscode-eslint
https://github.com/Zeukkari/eslint-prettier-test/blob/master/.vscode/settings.json

VSCode autoformatting hangup issue:
https://github.com/Microsoft/vscode-eslint/issues/380#issuecomment-355981051


## Atom

https://github.com/AtomLinter/linter-eslint
https://github.com/AtomLinter/linter-eslint/pull/508


# Codeshift Toolkit

https://github.com/facebook/jscodeshift


## ES6

Collection of codemod scripts for use with JSCodeshift that help update ES5 to ES6.

https://github.com/cpojer/js-codemod


## React

Collection of codemod scripts for use with JSCodeshift that help update React APIs.

https://github.com/reactjs/react-codemod

`npx jscodeshift -t react-codemod/transforms/pure-component.js index.js`

