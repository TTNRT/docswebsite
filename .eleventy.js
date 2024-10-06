const { execSync } = require('child_process')
const fs = require('fs/promises');
const pluginTOC = require('@uncenter/eleventy-plugin-toc')
const markdownIt = require('markdown-it')
const syntaxHighlightingPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');
const markdownItClass = require('markdown-it-class');
const markdownItAnchor = require('markdown-it-anchor')
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function (eleventyConfig) {
	const mdOptions = { linkify: false, html: true };
	const mdAnchorOpts = {
	  permalink:  markdownItAnchor.permalink.headerLink(),
	  level: [1, 2, 3, 4, 5],
	};
	eleventyConfig.addPlugin(pluginTOC, {
		tags: ['h1', 'h2', 'h3', 'h4', 'h5'],
		wrapper: function (toc) {
			toc = toc.replaceAll('<a', "<a class='sidebar-link'");
			return `${toc}`;
		},
	});
	eleventyConfig.setLibrary(
		'md',
		markdownIt(mdOptions).use(markdownItClass).use(markdownItAnchor, mdAnchorOpts),
	);
	eleventyConfig.addPassthroughCopy({ static: "/" });
	eleventyConfig.addPlugin(syntaxHighlightingPlugin);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.on('eleventy.after', () => {
		execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
	  })
	  eleventyConfig.on('eleventy.before', async ({ dir }) => {
		await fs.rm(dir.output, { recursive: true, force: true });
	});

	eleventyConfig.addPairedShortcode("admonition", function(content, type, title) {
		let titleStr = "";
		if(title) {
		  titleStr = title;
		} else if(type) {
		  titleStr = type.substring(0, 1).toUpperCase() + type.substring(1).toLowerCase();
		} else {
		  titleStr = "Info";
		}
		
		return `<div class="alert alert-${type ? `${type.toLowerCase()}`:""}" role="alert">
		  <div class="alert-heading h5">${titleStr}</div>
		  <p>${content}</p>
		</div>`
	  });
	return {
		dir: {
			// ⚠️ This value is relative to your input directory.
			input: "views"
		},
	};
};