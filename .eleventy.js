// Add JavaScript below
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("styles");
  };