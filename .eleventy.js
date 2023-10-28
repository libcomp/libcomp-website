module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets/css')
  eleventyConfig.addPassthroughCopy("src/assets/favicon.ico");
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site/"
    }
  }
};
