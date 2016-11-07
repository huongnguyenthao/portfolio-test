

load_template().done(function(){
       //wait for done and the run the second
	load_gallery_templates();
    });

function load_template() {
	$('#header').load('/templates/header.xhtml');
	$('#footer').load('/templates/footer.xhtml');
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
     "1":["My Grandmother","Acrylic on Canvas. 45 x 60 cm. This is a painting of my grandmother in the style of Degas' ballerina.", "/images/my_grandmother.jpg"], 
     "2":["Chicken and Chicken","Acrylic on Canvas, 45 x 60 cm. The first painting I sold! This one features a stuffed chicken among chicken products, arranged like as if Godzilla was confronting a city and the city's curious blocks, its modern eccentricities.", "/images/chicken_and_chicken.jpg"], 
     "3":["A View of Cornell College", "Acrylic on Canvas. 45 x 60 cm. ", "/images/cornell_college.jpg"],
     "4":["Window Glass", "Acrylic on Canvas. 36' x 45'. Inspired by the stained glass windows in Gothic churches.", "/images/window_glass.jpg"],
	};


	for (var i = 1; i <= 4; i++) {
		var gallery_array = gallery_dictionary[String(i)];
		var gallery_item = $("<div>", {"class": "gallery_item col-xs-12 col-md-6 col-lg-4"});
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
		var desstr = gallery_array[1];
		if (desstr.length > 117) {
			desstr = desstr.substring(0, 116);
			desstr += "...";
		}
		description.append(desstr);
		description.appendTo(gallery_item);
		gallery_item.appendTo("#containing_div");
	}

	var header = document.getElementById('header');
	
}


function load_images() {
	var item1 = document.getElementById('gallery_item-1');
}

$(window).resize(function() {
	
});

function openNav() {
     document.getElementById("mySidenav").style.width = "250px";
 }
 
 /* Set the width of the side navigation to 0 */
 function closeNav() {
     document.getElementById("mySidenav").style.width = "0";
 }