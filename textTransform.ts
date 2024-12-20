import { editor } from "@silverbulletmd/silverbullet/syscalls";
import { upperCase,  lowerCase, capitalize, upperFirst, snakeCase, camelCase, kebabCase, startCase } from "@es-toolkit/es-toolkit";

export async function toUppercase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = upperCase(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toLowercase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = lowerCase(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toCapitalize() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = capitalize(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toTitleCase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = startCase(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toSentenceCase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = upperFirst(lowerCase(text));

    await editor.replaceRange(from, selection.to, text);
}

export async function toSnakeCase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = snakeCase(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toCamelCase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = camelCase(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toKebabCase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = kebabCase(text);

    await editor.replaceRange(from, selection.to, text);
}

export async function toDotCase() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = kebabCase(text).replace('-', '.');

    await editor.replaceRange(from, selection.to, text);
}

export async function camelToSnake() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = snakeCase(startCase(text));

    await editor.replaceRange(from, selection.to, text);
}

export async function kebabToSnake() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = snakeCase(startCase(text));

    await editor.replaceRange(from, selection.to, text);
}

export async function camelToSpace() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = lowerCase(startCase(text));

    await editor.replaceRange(from, selection.to, text);
}

export async function removeSpaces() {
    let text = await editor.getText();
    const selection = await editor.getSelection();
    let from = selection.from;

    text = text.slice(from, selection.to);
    text = text.replace(/ /g, '');

    await editor.replaceRange(from, selection.to, text);
}
