import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: 'src/lib',
      $components: 'src/components'
    },
    prerender: {
      default: true
    }
  },

  preprocess: preprocess({
    scss: {
      includePaths: ['src']
    },
    postcss: true
  })
};

export default config;