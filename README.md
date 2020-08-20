<h3 align="center">Reponsive Phone Store</h3>

<div align="center">

[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/hung-duong-7382741a7/)
[![Gmail](https://img.shields.io/badge/-Gmail-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:baohungdev@icloud.com)

</div>
<p align="center">This is my graduation app with react by using ChakraUI.</p>

![Screen shot](/public/homepage.png)

## What this App does?

- By this app, you will be able to:

  - Shopping and checkout with Stripe.

## Built with

- NextJs(SSR)
- React (Context)
- Chakra-UI
- Styled-components
- Apollo Client
- GraphQL
- Typescript

## Tree

├─ components
│  ├─ Layout
│  │  ├─ FlexContainer.tsx
│  │  ├─ FlexNavItem.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ NavMenu.tsx
│  │  └─ index.tsx
│  ├─ Loading
│  │  └─ Loading.jsx
│  ├─ Map
│  │  └─ Map.jsx
│  ├─ PaginationBar
│  │  └─ PaginationBar.tsx
│  ├─ ProductCard
│  │  └─ index.tsx
│  ├─ RightBox
│  │  └─ RightBox.tsx
│  ├─ cart
│  │  ├─ CartDropdown.tsx
│  │  ├─ CartIcon.jsx
│  │  └─ CartItem.tsx
│  ├─ checkout
│  │  ├─ checkout-item.tsx
│  │  └─ stripe-button.tsx
│  └─ graphql
│     └─ product
│        ├─ getAllProduct.query.ts
│        └─ getProductDetail.ts
├─ hooks
│  └─ usePagination.tsx
├─ interfaces
│  └─ index.ts
├─ pages
│  ├─ detail
│  │  └─ [id].tsx
│  ├─ _app.jsx
│  ├─ _document.tsx
│  ├─ checkout.tsx
│  ├─ index.tsx
│  └─ search.tsx
├─ providers
│  └─ cart
│     ├─ cart.provider.jsx
│     └─ cart.utils.js
├─ public
│  ├─ favicon.ico
│  ├─ homepage.png
│  └─ vercel.svg
├─ theme
│  ├─ index.ts
│  └─ theme.ts
├─ utils
│  ├─ index.ts
│  └─ withApollo.js
├─ .eslintrc.json
├─ .gitignore
├─ .prettierignore
├─ .prettierrc.json
├─ README.md
├─ next-env.d.ts
├─ package-lock.json
├─ package.json
├─ tsconfig.json
└─ yarn.lock


## Setup

- Clone the repository
- Use `cd <repository-path>`
- Run `yarn` or `npm i`
- Run `yarn dev` or `npm run dev`

## Author

Duong Bao Hung

- Github: [@baohungdev](https://github.com/baohungdev)

- LinkedIn: [Duong Bao Hung](https://www.linkedin.com/in/hung-duong-7382741a7/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Start by:

- Forking the project
- Cloning the project to your local machine
- `cd` into the project directory
- Run `git checkout -b your-branch-name`
- Make your contributions
- Push your branch up to your forked repository
- Open a Pull Request with a detailed description to the development branch of the original project for a review

## Show your support

Give a ⭐️ if you like this project!
