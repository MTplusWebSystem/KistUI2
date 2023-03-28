import {NavBars1} from "./style/style.js"
import {Teg1} from "./shadow/elementos.js"
const style = NavBars1
const teg = Teg1
class ComponentsBars extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:"open"})
    
    shadow.innerHTML = `${style} ${teg}`
  }
}
export {
  ComponentsBars
}
