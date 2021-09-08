module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css")
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("js")

    // Markdown it
    const markdownIt = require("markdown-it")
    const markdownItAttrs = require("markdown-it-attrs")

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true,
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs)

    eleventyConfig.setLibrary("md", markdownLib)

    // Posts with custom sorting
    eleventyConfig.addCollection("posts", function (collectionAPI) {
        return collectionAPI
            .getFilteredByGlob("posts/*.*")
            .sort((a, b) => a.data.order - b.data.order)
    })

    return {
        passthroughFileCopy: true,

        dir: {
            includes: "_includes",
            layouts: "_layouts",
        },
    }
}
