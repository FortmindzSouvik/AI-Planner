
# ----------------------------
# 1️⃣ Build stage
# ----------------------------
FROM node:alpine AS builder

WORKDIR /app


# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

RUN npm run build

# # Remove dev dependencies
RUN npm prune --production



# # ----------------------------
# # 2️⃣ Production stage (Distroless)
# # ----------------------------
# FROM gcr.io/distroless/nodejs20-debian12


EXPOSE  3000
CMD ["npm", "run", "start"]









