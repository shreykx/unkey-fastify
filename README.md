# Use **Unkey** ratelimiting with fastify in javascript
This template shows how could you use unkey ratelimiting api with javascript

# How to use?

- go to unkey.com and create an account
- create a new unkey secret key [here](https://app.unkey.com/settings/root-keys)
- clone the github [repo](https://github.com/shreykx/unkey-fastify).
- edit **`.env`** with your own unkey secret key.
- run **`npm install`** to **add** the necessary packages.
- run the app using **`pnpm start`** or **`npm start`** or **`yarn start`**
- check on **`/secret`** route and reload to test **ratelimiter**
- start working on ratelimiting your routes at **`app.js`**
- Done 🎉