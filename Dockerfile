FROM node:20-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN DIRECT_URL="postgresql://placeholder" DATABASE_URL="postgresql://placeholder" pnpm exec prisma generate

RUN pnpm build

EXPOSE 5000

CMD ["node", "dist/src/index.js"]