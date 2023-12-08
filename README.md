<h1 align="center">Toast Notifications</h1>

<div align="center">
  <image src="https://github.com/edinelsonslima/lp-toast-notification/blob/main/lp.gif"/>
</div>

## 👀 Links
- 🔗 [Apresentação do toast notification](https://edinelsonslima.github.io/lp-toast-notification/)
- 🔗 [NPM](https://www.npmjs.com/package/@edinelsonslima/toast-notification)

## ⤵️ Instalando
Adicionar com **yarn**
```
yarn add @edinelsonslima/toast-notification
```
Adicionar com **npm**
```
npm install @edinelsonslima/toast-notification
```

## 👨🏻‍💻 Modo de usar
- Adicione o componente `<ToastContainer/>` em algum lugar da sua aplicação;
- Importe os estilos css de `import '@edinelsonslima/toast-notification/dist/style.css'`;

```tsx
import { ToastContainer } from '@edinelsonslima/toast-notification';
import '@edinelsonslima/toast-notification/dist/style.css';

export default function App(){
  //seu código

  return (
    <>
      <ToastContainer />
    </>
  )
}
```

- Disparando os toast com a função `toast` de dentro do `@edinelsonslima/toast-notification`

```tsx
import { toast } from '@edinelsonslima/toast-notification';

export default function MyComponent(){
  //seu código

  const exampleToast = () => {
    toast.success({ text: "Mensagem de exemplo" })
  }

  return (
    //seu código
  )
}
```

## 🧐 Informações adicionais


#### O que é disponível com o pacote
| função             | propriedades                                               |
|--------------------|------------------------------------------------------------|
| ToastContainer     | `classNames` `position` `defaultDuration`                  |
| toast              | `text` `type` `duration`                                   |
| style              | `/dist/style.css`                                          |

#### As propriedades da função toast
|propriedade         | toast                                                      |
|--------------------|----------------------------------------------------------- |
| content            | A conteúdo que aparecerá dentro do toast                   |
| type               | Define o tipo de toast que é para aparecer                 |
| duration           | O tempo que o toast irá permanecer em tela                 |

#### As propriedades do componente ToastContainer
|propriedade         | ToastContainer                                             |
|--------------------|----------------------------------------------------------- |
| classNames         | Um objeto de **chave:valor** onde a chave é o tipo de toast e o valor pode ser uma string (classNames) ou um objeto (CSSProperties)           |
| position           | Define em qual parte da tela irá aparecer a toast notification, existe valores predefinidos                                         |
| defaultDuration    | Define tempo padrão de duração de todas as toast           |

#### Mais detalhes sobre as propriedades
| propriedade     |tipo     | é obrigatório   | padrão      |
|-----------------|---------|-----------------|-------------|
| content         |ReactNode| sim             |     -       |
| type            |string   | sim             |     -       |
| duration        |number   | não             | 7_0000      |
| defaultDuration |number   | não             |     -       |
| classNames      |object   | não             | undefined   |
| position        |string   | não             | right-top   |

ℹ️ O `duration` e `defaultDuration` estão em ms (milissegundos)

ℹ️ A função `toast` pode ser chamada de algumas formas, veja os exemplos a seguir:

caso seja chamada direta, será obrigatório informa o **type**
```ts
toast({ text: "mensagem exemplo", type: "info", duration: 1000 * 4 })
```
ou pode acessar o tipo do toast diretamente, assim omitindo ele do objeto enviado
```ts
toast.info({ text: "mensagem exemplo", durantino: 1000 * 4 })
```
```ts
toast.info('mensagem exemplo')
```
```tsx
toast.info(<strong>mensagem exemplo</strong>)
```
```tsx
toast.info(<MeuComponente>mensagem exemplo</MeuComponente>)
```



