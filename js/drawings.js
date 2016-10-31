load_template().done(function(){
       //wait for done and the run the second
    });

function load_template() {
	$('#header').load('/templates/header.xhtml');
	$('#footer').load('/templates/footer.xhtml');
	load_gallery_templates();
	return $.ajax();
}

//Dictionary has format: Key as number, Value as [Title, Description, Path]



function load_gallery_templates() {
	// var gallery_items = document.getElementsByClassName('gallery_item');
	// for (gallery_item in gallery_items) {
	// 	$.get('../templates/gallery-item.xhtml', function(gallery_item){
	// 	});
	// }
	var gallery_dictionary = { 
     "1":["Woman in the Rain","Ink on paper. The cropping may look a bit strange because the paper size was too big for the scanner!", "/images/woman_in_the_rain.jpg"], 
     "2":["Woman and Mermaid","A Lollipop or a Bullet fan art done in xxxHOLiC style. Ink on paper, 9' x 12'", "/images/woman_and_mermaid.jpg"], 
     "3":["Girl with Roses", "A Lollipop or a Bullet fan art done in xxxHOLiC style, but with a bit of my own touch in it. Ink and watercolor on paper, 9' x 12'", "/images/girl_with_roses.jpg"]
	};
	for (var i = 1; i <= 3; i++) {
		var gallery_array = gallery_dictionary[String(i)];
		var gallery_item = $("<div>", {"class": "gallery_item"});
		var image_container = $("<div>", {"class": "image_container"});
		var img = $('<img id=i class="gallery_image">'); //Equivalent: $(document.createElement('img'))
		img.attr('alt', gallery_array[0]);
		img.attr('src', gallery_array[2]);
		img.appendTo(image_container);	
		image_container.appendTo(gallery_item);
		var title = $("<h2>", {"class": "gallery_title"});
		title.append(gallery_array[0]);
		title.appendTo(gallery_item);
		var description = $("<p>", {"class": "gallery_description"});
		description.append(gallery_array[1]);
		description.appendTo(gallery_item);
		gallery_item.appendTo("#containing_div");
	}
}


function load_images() {
	var item1 = document.getElementById('gallery_item-1');
}

$(window).resize(function() {
	
});

