module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/spa-portfolio2/" : "/",
  devServer: {
    disableHostCheck: true,
    port: 8080,
    public: "0.0.0.0:8080"
  }
};
