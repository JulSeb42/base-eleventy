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

    // Shortcodes
    eleventyConfig.addShortcode("user", function (firstName, lastName) {
        return `<p>Hi, I'm ${firstName} ${lastName}!</p>`
    })

    // Shortcodes with open and close tags => always put content inside the tags first
    eleventyConfig.addPairedShortcode("code", function (content, lang, name) {
        return `<pre>
<code class="${lang}">${content}</code>
</pre>
${name}`
    })

    return {
        passthroughFileCopy: true,

        dir: {
            includes: "_includes",
            layouts: "_layouts",
        },
    }
}
