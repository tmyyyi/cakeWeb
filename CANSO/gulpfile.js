	var	gulp = require("gulp");
	var	connect = require("gulp-connect");
	var	sass = require("gulp-sass");
	var	htmlmin = require("gulp-htmlmin");
	var	uglify = require('gulp-uglify');
	var	babel = require('gulp-babel');

// 启动 server
gulp.task("server",function(){
	connect.server({
		livereload:true,
		port:1021,
		root:"dist"
	});
})


//编译 sass
gulp.task("sass",function(){
	gulp.src("app/sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});

//压缩 html 省略空白
gulp.task('html', function() {
    gulp.src('app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
});

//压缩 JS
gulp.task("js", function(){
	gulp.src(["app/**/*.js","!app/libs/*.js"])
	/*.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())*/
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

//复制 图片
gulp.task("img", function(){
	gulp.src("app/img/**/*")
	.pipe(gulp.dest("dist/img"));
});

//复制 第三方js
gulp.task("libs", function(){
	gulp.src("app/libs/**/*")
	.pipe(gulp.dest("dist/libs"));
})

// 监视任务
gulp.task("watch", function(){
	gulp.watch("app/**/*.js",["js"]);
	gulp.watch("app/css/**/*.css",["css"]);
	gulp.watch("app/**/*.html",["html"]);
	gulp.watch("app/sass/**/*.scss",["sass"]);
});

// 定义默认任务
gulp.task("default",["server","html","js","watch","img","sass","libs"]);