# NPX CARD

This anmol098's NPX card unique style to connect with me directly via console or terminal

👇 just hit

```bash
npx angry_pickle_guy
```

And get to know me in unique style.

Made by [anmol098](https://github.com/anmol098/). Go give him a Star [NPX_CARD](https://github.com/anmol098/npx_card)

## STEPS TO CREATE YOUR OWN

### npm init

Start a new `node` project and name it whatever you want. You could choose to name it after the executable you want to expose. It’s not necessary but conventions are nice, and it makes your binary more `npx` friendly.

```bash
mkdir angry_pickle_guy
cd angry_pickle_guy
npm init -y
touch card.js
chmod +x card.js
```

Now open the new file in your favorite editor. I’ve been using `VisualStudio Code`.

```javascript
#!/usr/bin/env node

console.log('doing business')
```

Be creative and add logic to create your own card in `card.js` file.
or you can simply copy my `card.js` file and make necessary changes as required

#### ship it

That’s an entirely functional first release! You just need to modify your `package.json` to let `npm` know to link your executable and you are off:

```json
{
  // ...
  "bin": "./card.js",
  // ....
}
```

By default, `npm` will expose your binary using the same name as your package

Share your new CLI with the world!

```bash
npm version patch
npm publish
```

Now anyone can leverage your new CLI using `npx`, without needing to install it locally:

```bash
npx $YOUR_PACKAGE_NAME
```

Now you have a globally executable script, that can leverage all of `npm`, to perform awesome utilities (or silly ideas like this). If you find you are writing a ‘big’ CLI with lots of parameters or sub-commands, you will want more options around how to define your CLI and should consider trying [yargs](https://www.npmjs.com/package/yargs) instead of [minimist](https://www.npmjs.com/package/minimist).
