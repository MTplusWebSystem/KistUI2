import {Pages1} from "./style/style.js"
import {Teg1} from "./shadow/elementos.js"
const style = Pages1
const teg = Teg1
class ComponentsPages extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:"open"})
    
    shadow.innerHTML = `${style} ${teg}`
  }
}
export {
  ComponentsPages
}
