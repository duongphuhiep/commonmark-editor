var gulp = require('gulp');
var liveServer = require("live-server");

gulp.task('test', function(){
	liveServer.start({open: "/test"});
});

gulp.task('default', function(){
    liveServer.start({open: "/demo"});
});
