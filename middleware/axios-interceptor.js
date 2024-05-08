export default function ({ $axios }) {
    console.log('Middleware is working!');
    $axios.onRequest(config => {
      if (config.method === 'OPTIONS') {
        config.method = 'POST';
      }
      return config;
    });
  }