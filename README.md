# Markdown Editor Element

It is a [polymer (1.0)](https://www.polymer-project.org/1.0/) element - a markdown editor for [commonmark](http://commonmark.org/) inspired by the [commonmark demo](http://spec.commonmark.org/dingus). 

	npm install
	bower install
	gulp
	 
![screenshoot](/demo/screenshoot.png)   

## Properties
	 
* `height` default = `"400px"` 
* `placeholder` default = `"Markdown content"`
* `markdownWorkingDir`: every the image url which has only image name will concatenate with the markdownWorkingDir value if it is set. Example if `markdownWorkingDir = "/content"` then
	*  `![](tiger.png)` is replaced by `![](/content/tiger.png)`
	*  `![](dargon.jpg)` is replaced by `![](/content/dragon.png)`
	*  `![](otherFolder/tiger.png)` won't changed
	*  `![](../vendor/tiger.png)` won't changed
	*  `![](http://mosaic.com/vendor/tiger.png)` won't changed
			
## TODO
	 
There is features/enhancements which I did NOT implement because they are not required for my production project. 

* Enhance preview highlighting
	* There is some place on the source it should know where to highlight in the preview result, but it is not the case.
* Sync scrolling between source and preview
* Reponsiveness - the preview content must to rearrange from the right to the bottom of the editor for mobile user
* Source highlighting / line number...
