function updateLink() {
  const input = document.getElementById("deeplink-input");

  const button = document.getElementById("deeplink-button");

  button.setAttribute("href", input.value);
}