const gulp = require("gulp");
const minify = require("gulp-minify");

gulp.task("compress", async function () {
	await gulp
		.src(["api.js", "server.js"])
		.pipe(
			minify({
				ext: {
					src: ".js",
					min: ".js",
				},
				noSource: true,
			})
		)
		.pipe(gulp.dest(".build"));
});
