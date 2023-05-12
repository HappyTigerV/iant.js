# Iant.js
<!-- English | [简体中文](README-zh.md) -->
***
*__Iant.js__* _( /jænt/, **I**'m **A** **N**oob **T**yper )_ is a _"typer"_ that can type letters one by one.
## Usage
Step 1: Download the `iant.js` or `iant.ts`_(If you're using TypeScript)_ file on <!--our [website]() or -->**GitHub Releases**. _(We may post it on npm in the future.)_

Step 2: 
```html
<!-- In browser -->
<script type="module">
    import Iant from "./iant.js";
    // do something...
</script>
```
or:
```javascript
// In Node.js //
import Iant from "./iant.js";
// do something...
```
or
```typescript
// In TypeScript //
import Iant from "./iant";
// do something...
```
## API
### `Iant`
`class Iant`

The root class.
#### Static properties
##### **VERSION**
`static readonly VERSION;`

The version number of **_Iant.js_**.

Type: _string_
##### **PEOPLE**
`static readonly PEOPLE;`

Some options that you can use directly.

Type: _object_
#### Property
##### **value**
`value: string;`

The output of the _"typer"_.

Type: _string_
#### Methods
##### **constructor**
`constructor(text: string, options?: IantOptions);`

Creates an _Iant_ object. 

**Parameters**
- text: _string_<br>The whole text you want the _"typer" types.
- options?: <a href="#IantOptions">_IantOptions_</a>

**Returns** **_Iant_** 
##### **start**
`start(): void;`

Starts to type.
##### **end**
`end(): void;`

Ends typing.
##### **on**
`on(event: "type" | "end", handler: (arg?: object | undefined) => void): void;`

Listens to events.

**Parameters**
- event: _"type" | "end"_<br>Event name.
- handler: _(arg?: object | undefined) => void_<br>Event handler.
***
### <div id="IantOptions">`IantOptions`</div>
`interface IantOptions`

Options of typing.
#### Properties
##### speed
`speed: number;`

_(Unit: seconds)_ How long does it take the _"typer"_ to type 1 letter.
##### wait
`wait: { min: number; max: number; };`

_(Unit: seconds)_ How long will the _"typer"_ wait for after finshing typing 1 letter.
## Contributing
You can submit an _issue_ or ask questions on _Discussions_. You're welcome to submit a _PR_ as well.
## License
BSD-3-Clause
## TODO
- [ ] Translate this doc into Chinese.
- [ ] Make the _"typer"_ types incorrectly and then fix it just like real ones.
- [ ] Build a website.
- [ ] Improve my English level.
- [ ] _~~Find a girlfriend~~_ (ignore this lol)