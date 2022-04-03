# VSCode Workspace Settings

Copy over settings.sample.json into settings.json

```sh
cp .vscode/settings.sample.json .vscode/settings.json
```

### Extensions

This project uses specific vscode extensions. Install extensions with commands below.

```sh
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
code --install-extension waderyan.gitblame
code --install-extension aaron-bond.better-comments
```

### settings.json

```javascript
{
  "workbench.colorCustomizations": {
    "activityBar.background": "#06351E",
    "titleBar.activeBackground": "#084A2A",
    "titleBar.activeForeground": "#EEFDF6"
  },

  // prettifys with prettier
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // prettifys with prettier
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // allows better comments vscode extension to have multiline comments
  "better-comments.multilineComments": true,

  // auto formats on save
  "editor.formatOnSave": true,

  // wraps text after 100 characters
  "editor.wordWrapColumn": 100,

  // hides folders and files from vscode sidebar
  "files.exclude": {
    "**/.git": true,
    "**/dist": true,
    "**/node_modules": true
  }
}
```
