// Add JavaScript below
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addPassthroughCopy("src");
}