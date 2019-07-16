# Quasar App
https://quasar.dev/quasar-cli/installation

npm install or npm update
npm install yarn
yarn --version
Quasar dev  to executein browser
> WIP

https://medium.com/coinmonks/everything-you-wanted-to
https://stackoverflow.com/questions/50328324/how-do-i-fix-a-vulnerable-npm-package-in-my-package-lock-json-that-isnt-listed

in  package-lock.json
change
"lodash": "^4.17.11",
to
"dependencies": {
  "lodash.template": ">=4.5.0"
}

"devDependencies": {
  "lodash.template": ">=4.5.0"
}
npm ls lodash  - where growl was the package name thi will show you who dependens on this package

Updating my package.json to show "lodash.template": ">=4.5.0"
then re-running npm install followed by npm ls lodash now shows a currently non-vulnerable version of lodash:
npm update lodash

v-if removes a item from the DOM and v-show changes the display
some methods are fire deven though they have nothing todo with what is going on.
so you many need to use a computer property instead

Computer methoods are treated as static property data and do not need the () like a method call

Compted properties is more effecient than a method and they have FULL access to the DATA or other methoods
filters have no access to the DATA or other methoods, they can only accepta value for processing
and return some value, like formating dates or data in a text box
