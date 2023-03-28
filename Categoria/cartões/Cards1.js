import {Cards1} from "./style/style.js"
import {Teg1} from "./shadow/elementos.js"
const style = Cards1
const teg = Teg1
class ComponentsCards extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:"open"})
    
    shadow.innerHTML = `${style} ${teg}`
  }
}
export {
  ComponentsCards
}
