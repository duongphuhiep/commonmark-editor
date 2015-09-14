# Markdown Editor Element

It is a [polymer (1.0)](https://www.polymer-project.org/1.0/) element - a markdown editor for [commonmark](http://commonmark.org/) inspired by the [commonmark demo](http://spec.commonmark.org/dingus). 

	bower install commonmark-editor

## Usage

    <commonmark-editor height="500px">
      Some initial markdown content (optional)
    </commonmark-editor>
    
![screenshoot](/demo/screenshoot.png)

## Properties
	 
* `height` default = `"400px"` 
* `placeholder` default = `"Markdown content"`
* `markdownWorkingDir`: every image url which contain only image name will concatenate with the markdownWorkingDir value if it is set. Example if `markdownWorkingDir = "/content"` then
	*  `![](tiger.png)` is replaced by `![](/content/tiger.png)`
	*  `![](dargon.jpg)` is replaced by `![](/content/dragon.png)`
	*  `![](otherFolder/tiger.png)` won't changed
	*  `![](../vendor/tiger.png)` won't changed
	*  `![](http://mosaic.com/vendor/tiger.png)` won't changed
	
## Developement

	npm install
	bower install
	gulp

I often used [live-server](https://www.npmjs.com/package/live-server) in the developement mode, you can also try [polyserve](https://github.com/PolymerLabs/polyserve) 	
	
## TODO
	 
There is features/enhancements which I did NOT implement because they are not required for my production project. I might come back to implement them later... Here is the priority list
 
* More tests
* Enhance preview highlighting
	* There is some place on the source it should know where to highlight in the preview result, but it is not the case.
* Sync scrolling between source and preview
* Make scroll animation
* Make `markdownWorkingDir` work with every relative local path
 	* For now, it work only with image path which contains only the image name
* Reponsiveness - the preview content must to rearrange from the right to the bottom of the editor for mobile user
* Source highlighting / line number...
