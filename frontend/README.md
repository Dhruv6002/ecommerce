# React + Vite

## Contact form backend

The contact form sends messages to the Express backend, which emails them using
SMTP. Copy `backend/.env.example` to `backend/.env` and replace `SMTP_USER` and
`SMTP_PASS` with valid SMTP credentials (for Gmail, use an app password).
`CONTACT_TO` is the inbox that receives messages.

Start the backend from the repository root with `npm --prefix backend run dev`,
then start the frontend with `npm --prefix frontend run dev`. The Vite
development server forwards `/api` requests to the backend on port 3001.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
