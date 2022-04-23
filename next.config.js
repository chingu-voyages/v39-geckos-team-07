module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
  },
};

const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
});
