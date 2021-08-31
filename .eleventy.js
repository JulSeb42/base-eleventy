module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("images")

    return {
        passthroughFileCopy: true,

        dir: {
            includes: "_includes",
            layouts: "_layouts",
        },
    }
}
