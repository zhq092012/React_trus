// module.exports = config => {
//   //在这里可以修改config
//   return config;
// };
//使用customize-cra配置
const { override, addDecoratorsLegacy } = require("customize-cra");
module.exports = override(addDecoratorsLegacy());
