

const Card_style = `
<style>
  .container{
    height:60vh;
    width:90vw;
    background-color:#ddd;
    border-radius: 15px;
    display: flex;
  }
  .text{
    width:80%;
    text-align: center;
  }
 .img{
   margin-top:4vh;
   margin-left:6vw;
   height: 80px;
   width:80px;
   
 }
#category{
  position: relative;
  text-align: center;
  width:20%;
  height:80px;
  border-radius: 0px 15px 0px 0px;
  background-color: #FFBA00;
}
span{
  position: absolute;
  margin-left: -50%;
  width:100%;
  border-radius:0px 0px 15px 0px ;
  height:49.3vh;
  background-color: #FFD633;
}
  </style>`


// Crie uma classe para o elemento
class CardComponent extends HTMLElement {
  constructor() {
    super();
    this.estilo = Card_style
    this.attachShadow({mode:"open"});
    this.shadowRoot.innerHTML =`
    ${this.estilo}
<div class="container">
   <div class="text">
     <div class="img">
       <slot name="img"></slot>
     </div> 
     <slot name="title"></slot>
     <slot name="description"></slot>
   </div> 
   <div id="category">
     <slot name="value"></slot>
     <span></span>
   </div> 
  </div>   `
    
  }
}
customElements.define('card-style1', CardComponent);

