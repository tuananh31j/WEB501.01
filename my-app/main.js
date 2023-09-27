import Navigo from "navigo"
import Homepage from "./src/pages/Homepage"
import ProductPage from "./src/pages/Product"

const router = new Navigo("/")

router.on("/", () => {
  document.querySelector('#app').innerHTML = Homepage()
})

router.on("/product", () => {
  document.querySelector('#app').innerHTML = ProductPage()
})

router.resolve();

// document.querySelector('#app').innerHTML = `
//   <div>
//     Hello
//   </div>
// `

