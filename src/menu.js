function navBarMenu() {
  const nav = document.createElement("nav");
  nav.classList.add("nav-menu");

  const button = document.createElement("button");
  button.classList.add("btn-back");
  button.textContent = "Back";

  const img = document.createElement("img");
  img.src = "./witcher-logo.png";

  nav.append(button, img);

  return nav;
}

export { navBarMenu };
