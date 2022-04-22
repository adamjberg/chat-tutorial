const root = document.getElementById("root");

const form = document.createElement("form");
const input = document.createElement("input");

const button = document.createElement("button");
button.innerText = "Submit";

const messageList = document.createElement("div");

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

function handleSubmit(e) {
  e.preventDefault();

  messageList.append(Message(input.value));

  input.value = "";
}

function Message(body) {
  const el = document.createElement("div");

  el.innerText = body;

  return el;
}
