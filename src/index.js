import "./styles.scss";
import logo from "./assets/logo.png";

const root = document.getElementById("root");

const img = document.createElement("img");
img.src = logo;
img.className = "logo";

const title = document.createElement("h1");
title.textContent = "Hola mundo";
title.className = "title";

root.append(img, title);