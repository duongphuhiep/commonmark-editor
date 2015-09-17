var gulp = require('gulp');
var polyserve = require("polyserve/main");

gulp.task('test', function(){
	//liveServer.start({open: "/test"});
	/*polyserve.startServer({
		port: argv.p,
		page: argv.o,
		browser: argv.b
	});*/
	polyserve.startServer({
		port: 8080,
		browser: "/components/commonmark-editor/test"
	});
});

gulp.task('default', function(){
    //liveServer.start({open: "/demo"});
	polyserve.startServer({
		port: 8080,
		page: "/components/commonmark-editor/demo"
	});
});
