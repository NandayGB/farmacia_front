# React + TypeScript + Vite ⚛️

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# PROJETO NANDAY FARMÁCIA 💊
-------------------------------------------------
## Esse é  um projeto React de farmácia💊 foi criado, seguindo as melhores práticas de desenvolvimento.
Foram construídos os componentes de home 🏡, navBar e footer para a interface do usuário.
Utilizando o Swagger da aplicação farmácia, foram criadas as models de categoria e produto com seus respectivos relacionamentos.
Foi implementado um service com os métodos de GetAll, Post, Put e Delete, indicando o caminho da aplicação backend em deploy.
Páginas de Categoria: Foram desenvolvidas as páginas de GetAll e Post/Put/Delete do recurso Categoria, incluindo componentes e lógica correspondentes.
