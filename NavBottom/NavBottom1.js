class PricingComponent extends HTMLElement {
  constructor() {
    super();
    this.estilo = Pricing_style
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
customElements.define('nav-bottom', PricingComponent);
