module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@styles": "./src/styles",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
          },
        },
      ],
    ],
  };
};
