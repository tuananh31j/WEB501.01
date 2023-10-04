import Navigo from "navigo"
import { Homepage, ProductPage } from "./src/pages"
import AdminProductPage from "./src/pages/admin/Product"
import { router, render } from "./src/libs"

// const router = new Navigo("/")

// const render = (component, container) => {
//   container.innerHTML = component()
// }

const app = document.querySelector('#app')

router.on("/", () => render(Homepage, app))
router.on("/product", () => render(ProductPage, app))
router.on("/admin/product", () => render(AdminProductPage, app))


router.notFound(() => {
  app.innerHTML = "<h1>Page Not Found</h1>"
})

router.resolve();

