# PRojeto a ser desenvolvido

**Ignite Feed**
Figma: https://www.figma.com/file/ClrKbzOrCUWeBdI0yFscV7/Ignite-Feed-(Community)?type=design&node-id=1-35&t=i6mDzrwFhYVuSIDW-0

# Renderização

O React usa a biblioteca ReactDOM para renderizar a dentro da div `#root` dentro
do arquivo `index.html`.

ReactDOM faz a integração do React para o ambiente de desenvolvimento web.

Em aplicações **SPA** toda a interace é renderizada por meio do JavaScript. Caso ele seja desativado, a página não será renderizada.

# Componentes 

Basicamente desacoplar um pedaó da aplicação, tornando reutilizável e isolado dos demais.
Todos os componentes são **JSX** ou **TSX**. Os dois são a juncão de JavaScript ou TypeScript com XML.

Como padrão de desenvolvimento, esse componentes ficam armazenados em uma pasta `components`

Os componentes devem ter a primeiro letra maiúscula para evitar confusão com os elemetnos HTML.

## Default Export

* Posso trocar o nome do componente no momento da importação
  * Pode causar confusão quando se tem diversos componentes diferentes

## Named Exports 

Export é mandado logo em frente a definição do próprio componente

# Propriedades

Informações que são passadas para o componente.

# Estilização

Todas as estilizações partem do JavaCript, por exemplo:
```
  import from 'styles.css'
```

No React, os escopos de estilização sáo específicos alguns componentes para que um estilização não interfira nas demais. Utilizaremos o `cssModules`. Utilizando cssModules precisamos importar ele nomeado para poder usar nas classes dentro dos componentes.
