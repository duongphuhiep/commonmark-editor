# About this branch

The element become reponsive. On narrow screen, the editor and preview become tab panel

![screenshoot](/demo/screenshoot-narrow.png)

I used pure CSS for it. There are 2 issues which discourage me from merging this feature to the main branch:

In the "tabs mode" 
 - If there are 2 components `commonmark-editor` on the same page. I can't switch tab of the second element
 - The scrolling did not work. (Highlight text in preview is ok)

# Markdown Editor Element

A [polymer (1.0)](https://www.polymer-project.org/1.0/) element - Markdown editor for [commonmark](http://commonmark.org/) inspired by the [commonmark dingus app](http://spec.commonmark.org/dingus). 

See [Online demo](http://open-elements.org/bower_components/commonmark-editor/demo/index.html) (thanks [marcus7777](https://github.com/marcus7777/open-elements.org))
![screenshoot](/demo/screenshoot.png)

## Installation

	bower install commonmark-editor

## Usage

    <commonmark-editor height="500px">
      Some initial markdown content (optional)
    </commonmark-editor>

## Properties
	 
* `height` default = `"400px"` 
* `placeholder` default = `"Markdown content"`
* `working-dir`: every image url which contain only image name will concatenate with the working-dir value if it is set. Example if `working-dir = "/content"` then
	*  `![](tiger.png)` will be replaced by `![](/content/tiger.png)`
	*  `![](dargon.jpg)` will be replaced by `![](/content/dragon.jpg)`
	*  `![](otherFolder/tiger.png)` won't changed
	*  `![](../vendor/tiger.png)` won't changed
	*  `![](http://mosaic.com/vendor/tiger.png)` won't changed
	
## Developement

	npm install
	bower install

To run demo on `localhost`, you have to use [polyserve](https://github.com/PolymerLabs/polyserve)
  	
	npm install -g polyserve
	polyserve
  	
then navigate to 
* `http://localhost:8082/components/commonmark-editor/demo`
* or `http://localhost:8082/components/commonmark-editor/test`
	
## TODO
	 
There is features/enhancements which I did NOT implement because they are not required for my production project. I might come back to implement them later... Here is the priority list
 
* Enhance preview highlighting
	* There is some place on the source it should know where to highlight in the preview result, but it is not the case.
* Sync scrolling between source and preview
* Make scroll animation
* Make `working-dir` work with every relative local path
  * For now, it work only with image path which contains only the image name
* Reponsiveness - the preview content must to rearrange from the right to the bottom of the editor for mobile user
* Source highlighting / line number...
* Theming capable
