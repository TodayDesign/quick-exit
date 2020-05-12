# Quick exit

Quick exit function for sensitive web page

## Install

```bash
npm install quick-exit
```

## Config parameters

| Option    | Type   | Default            |
| --------- | ------ | ------------------ |
| `safeUrl` | String | https://google.com |

## Usage

### Vanilla

```js
import quickExit from 'quick-exit';

const config = {
  safeUrl: 'https://google.com',
};

const element = document.querySelector('button.quick');
element.addEventListener('click', () => quickExit(config), false);
```

### React

```js
import quickExit from 'quick-exit';
import React from 'react';

const Element = () => <button onClick={() => quickExit()}>Quick exit</button>;
```

## Quick exit steps

1. Remove all visual display via CSS
2. Remove head title
3. Replace current URL with safe url (redirect)
4. Clears persistent data e.g. cookies, sessions, local storage
5. Opens new tab with safe url
6. Focus on new safe url tab
