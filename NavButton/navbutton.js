

const Button_style = `
<style>
  .container{
      background-color: #fff;

    width:100vw;

    border-radius: 0px 0px 15px 15px;
  }
  .container ul{
    position: relative;
    padding: 0;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
  .container li{
    margin: 5px;
  }
  .container a{
    cursor:none;
  }
  </style>`


// Crie uma classe para o elemento
class ButtomComponent extends HTMLElement {
  constructor() {
    super();
    this.estilo = Button_style
    this.attachShadow({mode:"open"});
    this.shadowRoot.innerHTML =`
    ${this.estilo}
<div class="container">
  <ul>
  <slot name="option" color="red"></slot>
  </ul>
</div>  `
    
  }
}
customElements.define('nav-button', ButtonComponent);

