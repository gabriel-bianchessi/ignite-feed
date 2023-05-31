# Renderização

O React usa a biblioteca ReactDOM para renderizar a dentro da div `#root` dentro
do arquivo `index.html`.

ReactDOM faz a integração do React para o ambiente de desenvolvimento web.

Em aplicações **SPA** toda a interace é renderizada por meio do JavaScript. Caso ele seja desativado, a página não será renderizada.

# Componentes 

Basicamente desacoplar um pedaó da aplicação, tornando reutilizável e isolado dos demais.
Todos os componentes são **JSX** ou **TSX**. Os dois são a juncão de JavaScript ou TypeScript com XML.

## Default Export

* Posso trocar o nome do componente no momento da importação
  * Pode causar confusão quando se tem diversos componentes diferentes

## Named Exports 

Export é mandado logo em frente a definição do próprio componente

# Propriedades

Informações que são passadas para o componente.