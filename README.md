# Portfolio — Claudia Ortega Martín

Portfolio de una página, HTML/CSS/JS plano, sin build.

- https://claudia-ortega.pages.dev (Cloudflare Pages)
- https://claudia-ortegamartin.github.io/portfolio-claudia (GitHub Pages)

## Desarrollo local

Abre `index.html` directamente en el navegador, no hace falta servidor.

## Commits

Este repo sigue [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(scope opcional): descripcion
```

Tipos: `feat` `fix` `docs` `style` `refactor` `perf` `test` `chore` `ci`

Ejemplos:
```
feat(contacto): anadir enlace a GitHub
fix(estilos): corregir recorte del borde dentado
```

Para que el hook de validación se active en tu copia local:

```
git config core.hooksPath .githooks
```

## Despliegue

GitHub Actions (`.github/workflows/deploy.yml`) despliega a GitHub Pages y a Cloudflare Pages en cada push a `master`.
