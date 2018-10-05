FROM node:8
EXPOSE 8081

COPY ./tsconfig.json tsconfig.json
COPY ./src src

# @types/node allows us to access NodeJS variables (like process) during TypeScript compilation
RUN npm install -g typescript && \
    npm install --save-dev @types/node && \
    tsc --build tsconfig.json

RUN ls -l build