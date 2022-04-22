const root = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");

const button = document.createElement("button");
button.innerText = "Submit";

const messageList = document.createElement("div");

fetch("/api/messages")
  .then((res) => {
    return res.json();
  })
  .then((messages) => {
    for (const message of messages) {
      messageList.append(Message(message.body));
    }
  });

/*
  This creates a final DOM structure that looks like:

  <body id="root">
    <form>
      <input />
      <button />
    </form>
    <div></div>
  </body>
 */
form.append(input);
form.append(button);

root.append(form);
root.append(messageList);

form.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const body = input.value;

  await fetch("/api/messages", {
    method: "POST",
    body: JSON.stringify({
      body,
    }),
    headers: {
      "Content-Type": "application/json ",
    },
  });

  messageList.append(Message(body));

  input.value = "";
}

function Message(body) {
  const el = document.createElement("div");

  el.innerText = body;

  return el;
}
