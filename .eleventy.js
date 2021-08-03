module.exports = function (eleventyConfig) {
  /**
   * .js files are generated to /build by rollup
   * but eleventy is ignore .gitignore automatically
   */
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: "./build",
    }
  }
};
