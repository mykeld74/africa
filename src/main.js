import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    total: 23250,
  },
});

export default app;
