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
  import from 'global.css'
```

No React, os escopos de estilização sáo específicos alguns componentes para que um estilização não interfira nas demais. Utilizaremos o `cssModules`. Utilizando cssModules precisamos importar ele nomeado para poder usar nas classes dentro dos componentes.

# CSS Global

Resetar as configurações utilizando técnicas de box model para evitar que os componentes cresçam indevdamente:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Dentro desse mesmo arquivo, criar as variáveis globais das cores: 

```css
:root {
  --white: #fff;
  --gray-100: #e1e1e1;
  --gray-300: #c4c4cc;
  --gray-400: #8d8d99;
  --gray-600: #323238;
  --gray-700: #29292e;
  --gray-800: #202024;
  --gray-900: #121214;

  --green-500: #00875f;
}
```

Essas cores irão definir a paleta de cores da aplicação e podem ser usadas globalmente, mantendo uma melhor padronização e facilidade de manutenção.

# Fontes

A fonte utilizada será a **Roboto**, que vem como importação do site do google. AS tags de link com o tipo "preconnect" devem ser postas em primeiro lugar para agilizar o carregamento das fontes.

Logo após, faremos a definição padrão das fontes: 

```css
body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
```

O `sans-serif` significa que caso a fonte não seja carregada o site deve usar uma fonte do sistema que não possua serifa.

O uso de medidas relativas como `rem` devem ser priorizados por conta da acessibilidade que proporcionam ao cliente;