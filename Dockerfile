# Étape de base avec installation de pnpm
FROM node:24 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copie des fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Étape pour les dépendances de production uniquement
FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

# Étape pour les dépendances de build (inclut devDependencies)
FROM base AS build-deps
RUN pnpm install --frozen-lockfile

# Étape de build
FROM build-deps AS build
COPY . .
RUN pnpm run build 

# Étape finale (runtime)
FROM base AS runtime
# On récupère les modules de prod et le résultat du build
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]