# SilverBullet Text Transform Plug 🔡 ➡ 🔠

A simple text transformation plugin for [SilverBullet](https://silverbullet.md), a note-taking application.

## Usage

This plugin hooks into SilverBullet's `Text:` command palette. To use it, select the text you want to transform. Click the **Run Command** button, or use the `Cmd + /` or `Ctrl + /` shortcuts. Select the transformation you want to perform by typing `Text:` followed by the name of the transformation. The selected text is transformed.

## Available transformations

### Case conversion
- Convert text to uppercase
- Convert text to lowercase
- Convert text to capitalize
- Convert text to title case
- Convert text to sentence case

### Programming cases
- Convert text to snake case
- Convert text to camel case
- Convert text to kebab case
- Convert text to dot case

### Separator conversion
- Convert camel case to snake case
- Convert kebab case to snake case
- Convert camel case to spaces

## Installation

Open your `PLUGS` note in SilverBullet and add this plug to the list:

```yaml
- github:mroovers/silverbullet-text-transform/textTransform.plug.js
```

Then run the `Plugs: Update` command.


## Disclaimer

This plugin is provided "as is" with no guarantee. Use it at your own risk and always test it yourself before using it in a production environment. If you find any issues, please [create a new issue](https://github.com/mroovers/silverbullet-text-transform/issues/new).

## License

This plugin is open-sourced software licensed under the [MIT](https://opensource.org/licenses/MIT) license.
Copyright © 2024 Marijn Roovers
