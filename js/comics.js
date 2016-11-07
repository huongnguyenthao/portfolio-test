

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
     "1":["Mrs Dalloway&#39;s Party","This is a comic adaptation of the party scene in Virginia Woolfy&#39;s <i>Mrs Dalloway</i>. To fit the story into 12 pages I had to radically cut down the plot and introduce an omnipresent narrator. These are pages 2, 5, 8 and 10-11 of the comic. Written and illustrated by me.", "/images/comic.jpg"], 
     "2":["How the CIA Stole AbEx Art","Thumbnails from my comics journalism project, about how the CIA secretly promoted Abstract Expressionist art. (Page 2, 3 & 10)", "/images/comic2.jpg"], 
	};


	for (var i = 1; i <= 2; i++) {
		var gallery_array = gallery_dictionary[String(i)];
		var gallery_item = $("<div>", {"class": "gallery_item col-xs-12 col-md-6 col-lg-4"});
		var image_container = $("<div>", {"class": "image_container"});
		var img = $('<img class="gallery_image">'); //Equivalent: $(document.createElement('img'))
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