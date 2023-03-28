const Teg1 = `
 <div class="container">
  <div class="category">
    <slot id="name" name="category"></slot>
  </div> 
  <div class="preco">
    <slot name="value"></slot>
    <h4>por mês</h4>
  </div> 
  <div class="descricao">
    <h5>Sempre conectado </h5>
  </div> 
  <button type="submit"><slot name="name-button"><slot>"</button>
  <script src="js/lib.js"></script>
</div> 
`

export {
  Teg1}
