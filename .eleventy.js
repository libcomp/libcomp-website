module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets/css')
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  return {
    passthroughFileCopy: true
  }
};
