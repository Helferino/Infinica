export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      API_TOKEN: process.env.API_TOKEN
    }
  }
})
