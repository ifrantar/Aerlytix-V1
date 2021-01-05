module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images"); // this is so 11ty don't process this folder when dumping it on _site
  eleventyConfig.addPassthroughCopy("css");

  
  
  
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public'
    }
  };

};
