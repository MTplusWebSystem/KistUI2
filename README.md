 # Web componente


  <h3 text-align="center">Criando meu próprio<br> webcomponente</h3>

Crie seu seus web components de forma rápida e simples<br>
<h2>Usando a base do código</h2>
<p>
 Variações serão adicionadas 
 ao decorrer do tempo <br> junto a comunidade 
</p>

## Código base
<===============================>

A estrutura é feita Criando class
 conforme a baixo <br>

``` javascript 
// criamos uma constante para guardar nossos estilos 
const meu_estilo = `
<style>

</style>
`






class Nome_do_componetw extends HTMLElement {
   // criamos um construtor 
   constructor() {
      // chamamos o super para acessar métodos e propriedades definidos na classe 
     super();
     // Criamos uma variável para receber o estilo 
     this.estilo = meu_estilo
   }
}

```
