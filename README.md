# boil

## What is it?

A boilerplate I use for all my node projects. It fetches a ZIP file and extracts it into the current folder, which is really handy since you can download a ZIP from a git repository. This ZIP acts as a base project, and is very handy for setting up `.gitignore`, `.editorconfig`, `.jshintrc`.

If you don't like [my base repository](https://github.com/marcooliveira/node-boilerplate-files), you can use your own (instructions below).

## Installing

Run `npm install -g node-boil`.

## Usage

Just run `boil` in the folder you want to put the boilerplate in.


### Custom base repository

Just create a `.boilrc` in your home folder (or any of the parent folders in which you want to use a custom base repository) with the following content:

```js
{
    "repository": "https://github.com/marcooliveira/node-boilerplate-files/archive/master.zip",
    "success": "Boiled"
}
```

As you can see, this allows you to change:

- **repository:** The base repository.
- **success:** The success message shown after boiling.