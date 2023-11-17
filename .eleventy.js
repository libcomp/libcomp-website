module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/css')
  eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  
  // Truncate Filter
  eleventyConfig.addFilter("truncate", function(text, length) {
    if (!text || typeof text !== 'string') return '';
    if (text.length <= length) return text;
    return text.substring(0, length) + "...";
  });
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site/"
    }
  }
};
