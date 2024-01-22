// Add JavaScript below
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("src");
  };
  module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: "src"
            output: "_site"
        },
    };
  };