import Navigo from "navigo"

const router = new Navigo("/")

router.on("/", () => {
  document.querySelector('#app').innerHTML = `
    <div>
      Home Page
    </div>
  `
})

router.on("/product", () => {
  document.querySelector('#app').innerHTML = `
    <div>
      Product Page
    </div>
  `
})

router.resolve();

// document.querySelector('#app').innerHTML = `
//   <div>
//     Hello
//   </div>
// `

