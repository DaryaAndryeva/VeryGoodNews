module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "https://verygoodnews.online",
        "/api": "https://verygoodnews.online",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
