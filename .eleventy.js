module.exports = function(eleventyConfig) {
  // Zkopírovat složku images/ do _site/images
  eleventyConfig.addPassthroughCopy("images");
  // Zkopírovat složku css/ do _site/css
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("pdf");

  return {
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};