import Navigo from "navigo"
// import Homepage from "./src/pages/Homepage"
// import ProductPage from "./src/pages/Product"
// import AboutPage from "./src/pages/About"

import { Homepage, ProductPage, AboutPage } from "./src/pages"

const router = new Navigo("/")

const render = (component, container) => {
  container.innerHTML = component()
}

const app = document.querySelector('#app')

router.on("/", () => render(Homepage, app))
router.on("/product", () => render(ProductPage, app))

router.resolve();

