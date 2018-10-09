const $doc = $(document);
const $header = $('header');
const $main = $('main');

$doc.on('scroll', function() {
	const scrollPos = $doc.scrollTop();
	const headerFromTop = $header.offset().top;
	const headerHeight = $header.outerHeight();

	$header.css({
		'opacity': 1- scrollPos / headerHeight,
		'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')'
	});
})