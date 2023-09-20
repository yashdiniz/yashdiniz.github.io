# README: Astro

## 🚀 Project Structure

I've decided to go with the following project structure, inspired by [the Frontend Handbook](https://infinum.com/handbook/frontend/react/project-structure).

```
/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── ascii.txt
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── core/
│   │   │   └── ...
│   │   └── shared/
│   │       ├── layouts/
│   │       │   └── ...
│   │       └── ...
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn`                    | Installs dependencies                            |
| `yarn dev`                | Starts local dev server at `localhost:4321`      |
| `yarn build`              | Build your production site to `./dist/`          |
| `yarn preview`            | Preview your build locally, before deploying     |
| `yarn astro ...`          | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help`    | Get help using the Astro CLI                     |
