import { menus } from "../../datafake"
import ListItem from "./ListItem";

const Header = () => {
    // console.log(menus);
    return `
        <header>
            <ul>
            ${menus.map((item) => {
        return ListItem(item)
    }).join("")}
            </ul>
        </header>
    `
}
export default Header