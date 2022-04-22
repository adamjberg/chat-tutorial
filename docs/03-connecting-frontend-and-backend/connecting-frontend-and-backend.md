# Connecting Frontend and Backend

## POST Message Body on Submit

```diff
// public/app.js
- function handleSubmit(e) {
+ async function handleSubmit(e) {
    e.preventDefault();

+   const body = input.value;

+   await fetch("/api/messages", {
+     method: "POST",
+     body: JSON.stringify({
+       body,
+     }),
+     headers: {
+       "Content-Type": "application/json ",
+     },
+   });

-  messageList.append(Message(input.value));
+  messageList.append(Message(body));

  input.value = "";
}
```

## GET Messages on Initial Load

The following code can go anywhere after `messageList` has been defined.  For simplicity, I recommend putting it the line below the creation of `messageList`.

```js
fetch("/api/messages")
  .then((res) => {
    return res.json();
  })
  .then((messages) => {
    for (const message of messages) {
      messageList.append(Message(message.body));
    }
  });
```

## Try It

### Start express server

```bash
cd be
node index.js
```

### Open Browser

http://localhost:8000

### Expected Results

You should be able to submit messages as before in 01-frontend.  However, now if you refresh the page, your messages will still be there.  

In the final lesson of this section of the tutorial we will go over how to deploy this so you can share the link with a friend and send messages to each other.