// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                design: resolve(__dirname, 'design/index.html'),
                crew: resolve(__dirname, 'crew/index.html'),
                destinaiton: resolve(__dirname, 'destinaiton/index.html'),
                technology: resolve(__dirname, 'technology/index.html'),
            },
        },
    },
});
