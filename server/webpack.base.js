module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: "babel-loader",
      //       options: {
      //         presets: ["@babel/preset-env"],
      //         plugins: [
      //           // here
      //           "@babel/plugin-transform-async-to-generator",
      //           "@babel/plugin-proposal-class-properties",
      //         ],
      //       },
      //     },
      //   ],
      // },
    ],
  },
};
