const { execSync } = require('child_process')
const fs = require('fs/promises');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ static: "/" });
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.on('eleventy.after', () => {
		execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
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