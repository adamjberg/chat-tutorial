# Backend

## Initialize `be` Folder

```bash
mkdir be
cd be
npm init
npm i express
```

## Create `index.js`

```js
const express = require("express");
const messages = [];

const app = express();

app.get("/api/messages", (req, res) => {
  res.json(messages);
});

app.post("/api/messages", (req, res) => {
  messages.push(req.body);
});

app.listen(8000);
```

## Create `.gitignore`

`npm` installs libraries to the `node_modules` folder.  It is not recommended to check this in to git, so we add it to the `.gitignore` file.

```bash
# be/.gitignore
node_modules
```
