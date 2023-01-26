# Infinica - Jakub Urban

## Note for reviewer
I left some comments across application's code (mostly `app.vue` and `components`) for better understanding some of my decisions but also I added some improvements I would make but evaluated them as not that important.

Other improvements:

Project:
  - Use CSS post-processor - Scss/Sass/Less
  - Maybe use store (Pinia/Vuex) for storing some data ?
  - Add more styling (I wasn't focusing on that part)
  - Maybe Nuxt.js is overkill but I like it this way 🤓
  - Better HTTP error handling

News ticker:
  - Add current time and date
  - Find better API, current are some kind of article titles which are not very fitting
  - Set direction of animation in component props

Text selection:
  - Show results count
  - Pass debounce timeout in component props
  - Button to clear current search
  - Option to don't search in specific elements or classes
  - Regex excape (Right now cannot select "." or "?", etc.)

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

### Environment setup

Create `.env` file in root based on `.env.example` structure

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
