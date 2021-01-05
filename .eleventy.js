module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images"); // this is so 11ty don't process this folder when dumping it on _site
  eleventyConfig.addPassthroughCopy("css");
};
