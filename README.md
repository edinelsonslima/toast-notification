# Toast Notifications

## ⤵️ Instalando

```
yarn add @edinelsonslima/toast-notification
```
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

  const examapleToast = () => {
    toast.success({ text: "Mensagem de exemplo" })
  }

  return (
    //seu código
  )
}
```

## 🧐 Informações adicionais

| função             | propriedades                                               |
|--------------------|------------------------------------------------------------|
| ToastContainer     | `classNames` `position`                                    |
| toast              | `text` `type` `duration`                                   |

|                    | toast                                                      |
|--------------------|----------------------------------------------------------- |
| text               | A mensagem que aparecerá dentro do toast                   |
| type               | Define o tipo de toast que é para aparecer                 |
| duration           | O tempo que o toast irá permanecer em tela                 |

|                    | ToastContainer                                             |
|--------------------|----------------------------------------------------------- |
| classNames         | Um objeto de **chave:valor** onde a chave é o tipo de toast e o valor pode ser uma string (classNames) ou um objeto (CSSProperties) |
| position           | Define em qual parte da tela irá aparecer a toast notification, existe valores predefinidos |



| propriedade |tipo   | é obrigatório   | padrão      |
|-------------|-------|-----------------|-------------|
| text        |string | sim             |     -       |
| type        |string | sim             |     -       | 
| duration    |number | não             | 7_0000      |
| classNames  |object | não             | undefined   |
| position    |string | não             | right-top   |

ℹ️ O  `durantion` está em ms (milissegundos)


ℹ️ A função `toast` pode ser chamada de duas forma, veja os exemplos a seguir:

caso seja chamada direta, será obrigatório informa o **type**
```ts
toast({ text: "mensagem exemplo", type: "info", durantion: 1000 * 4 })
```
ou pode acessar o tipo do toast diretamente, assim omitindo ele do objeto enviado
```ts
toast.info({ text: "mensagem exemplo", durantion: 1000 * 4 })
```



