// Horizontal Scroll
$('#project-list').mousewheel(function(e, delta) {
	this.scrollLeft -= (delta);
});