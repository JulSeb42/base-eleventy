module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("js")

    return {
        passthroughFileCopy: true,

        dir: {
            includes: "_includes",
            layouts: "_layouts",
        },
    }
}
