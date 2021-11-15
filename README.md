<h1 align="center">Welcome to array-object 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/array-object" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/array-object.svg">
  </a>
  <a href="https://github.com/prkeshri/node-array-object#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/prkeshri/node-array-object/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/prkeshri/node-array-object/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/prkeshri/array-object" />
  </a>
</p>

> Use an object where an array is required (See examples)

### 🏠 [Homepage](https://github.com/prkeshri/node-array-object#readme)

## Install

```sh
npm install array-object
```

## Run tests

```sh
npm run test
```

## Functions

<dl>
<dt><a href="#o2a">o2a(o)</a> ⇒</dt>
<dd><p>Converts an object into an array while preserving keys in &#39;keys&#39; property</p>
</dd>
<dt><a href="#a2o">a2o(a)</a> ⇒</dt>
<dd><p>Converts an array into an object. If the object was converted into array using above method, it will read keys from the keys property</p>
</dd>
<dt><a href="#patch">patch([key])</a></dt>
<dd><p>Patches a function so it can be called (always async) with first argument as object instead of an array</p>
</dd>
<dt><a href="#call">call(cb, ...args)</a> ⇒</dt>
<dd><p>Useful to call the function (sync) with 1st arguments as object instead of array</p>
</dd>
<dt><a href="#callAsync">callAsync(cb, ...args)</a> ⇒</dt>
<dd><p>Useful to call the function (async) with 1st arguments as object instead of array</p>
</dd>
</dl>

<a name="o2a"></a>

## o2a(o) ⇒
Converts an object into an array while preserving keys in 'keys' property

**Kind**: global function  
**Returns**: Array  

| Param | Type |
| --- | --- |
| o | <code>Object</code> | 

<a name="a2o"></a>

## a2o(a) ⇒
Converts an array into an object. If the object was converted into array using above method, it will read keys from the keys property

**Kind**: global function  
**Returns**: Object  

| Param | Type |
| --- | --- |
| a | <code>Array</code> | 

<a name="patch"></a>

## patch([key])
Patches a function so it can be called (always async) with first argument as object instead of an array

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [key] | <code>string</code> | <code>&quot;$o&quot;</code> | The patch name |

<a name="call"></a>

## call(cb, ...args) ⇒
Useful to call the function (sync) with 1st arguments as object instead of array

**Kind**: global function  
**Returns**: Promise<Result>  

| Param | Type |
| --- | --- |
| cb | <code>Callback</code> | 
| ...args | <code>any</code> | 

<a name="callAsync"></a>

## callAsync(cb, ...args) ⇒
Useful to call the function (async) with 1st arguments as object instead of array

**Kind**: global function  
**Returns**: Result  

| Param | Type |
| --- | --- |
| cb | <code>Callback</code> | 
| ...args | <code>any</code> | 

## Author

👤 **Praveen Ranjan Keshri**

* Github: [@prkeshri](https://github.com/prkeshri)
* LinkedIn: [@prkeshri](https://linkedin.com/in/prkeshri)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/prkeshri/node-array-object/issues). You can also take a look at the [contributing guide](https://github.com/prkeshri/node-array-object/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2021 [Praveen Ranjan Keshri](https://github.com/prkeshri).<br />
This project is [ISC](https://github.com/prkeshri/node-array-object/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_