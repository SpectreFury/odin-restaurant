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

function menu() {
  const menuContainer = document.createElement("section");
  menuContainer.classList.add("menu-container");

  const foodOneDiv = document.createElement("div");
  foodOneDiv.classList.add("menu-item");
  const foodTwoDiv = document.createElement("div");
  foodTwoDiv.classList.add("menu-item");
  const foodThreeDiv = document.createElement("div");
  foodThreeDiv.classList.add("menu-item");
  const foodFourDiv = document.createElement("div");
  foodFourDiv.classList.add("menu-item");
  const foodFiveDiv = document.createElement("div");
  foodFiveDiv.classList.add("menu-item");
  const foodSixDiv = document.createElement("div");
  foodSixDiv.classList.add("menu-item");

  const foodOneImg = document.createElement("img");
  foodOneImg.src = "./bourguignon.webp";
  const foodTwoImg = document.createElement("img");
  foodTwoImg.src = "./chicken_leg.webp";
  const foodThreeImg = document.createElement("img");
  foodThreeImg.src = "./baguette_with_fish_pate.webp";
  const foodFourImg = document.createElement("img");
  foodFourImg.src = "./dried_fruit_and_nuts.webp";
  const foodFiveImg = document.createElement("img");
  foodFiveImg.src = "./gingerbread.webp";
  const foodSixImg = document.createElement("img");
  foodSixImg.src = "./banana.webp";

  const foodOneP = document.createElement("p");
  foodOneP.textContent = "A delicacy known to few";
  const foodTwoP = document.createElement("p");
  foodTwoP.textContent = "You know you want a bite";
  const foodThreeP = document.createElement("p");
  foodThreeP.textContent = "Fresh from Paris";
  const foodFourP = document.createElement("p");
  foodFourP.textContent = "Get some for pockets";
  const foodFiveP = document.createElement("p");
  foodFiveP.textContent = "A sweet tooth, eh?";
  const foodSixP = document.createElement("p");
  foodSixP.textContent = "It's a banana";

  foodOneDiv.append(foodOneImg, foodOneP);
  foodTwoDiv.append(foodTwoImg, foodTwoP);
  foodThreeDiv.append(foodThreeImg, foodThreeP);
  foodFourDiv.append(foodFourImg, foodFourP);
  foodFiveDiv.append(foodFiveImg, foodFiveP);
  foodSixDiv.append(foodSixImg, foodSixP);

  menuContainer.append(
    foodOneDiv,
    foodTwoDiv,
    foodThreeDiv,
    foodFourDiv,
    foodFiveDiv,
    foodSixDiv
  );

  return menuContainer;
}

export { navBarMenu, menu };
