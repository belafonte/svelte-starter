import App from './App.svelte';

// setting up polyfills for smooth scroll and older browsers
import smoothscroll from 'smoothscroll-polyfill';
import 'regenerator-runtime/runtime'

smoothscroll.polyfill()

const app = new App({
  target: document.body
});

export default app;

