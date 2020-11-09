// module.exports =
// export default {
//   presets: ["@vue/cli-plugin-babel/preset", "@babel/preset-env"]
// };
module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
