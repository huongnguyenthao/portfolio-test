

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
     "1":["Woman in the Rain","Ink on paper. The cropping may look a bit strange because the paper size was too big for the scanner!", "/images/woman_in_the_rain.jpg"], 
     "2":["Woman and Mermaid","A Lollipop or a Bullet fan art done in xxxHOLiC style. Ink on paper, 9' x 12'", "/images/woman_and_mermaid_small.jpg"], 
     "3":["Girl with Roses", "A Lollipop or a Bullet fan art done in xxxHOLiC style, but with a bit of my own touch in it. Ink and watercolor on paper, 9' x 12'", "/images/girl_with_roses_tiny.jpg"],
     "4":["Girl in Leaves", "<p><i>I stirred on the dead leaves as though I had really heard the breaking of the globe and cried out, \"Gilbert Anderson, Gilbert Anderson must cure him.\"</i></p> <p>Artist Statement (written for class)</p><p>Rebecca West’s The Return of the Soldier is full of striking moments that could be illustrated, and indeed many have been. I chose this particular moment partly because it has not, and partly because it marks a singularly crucial development for Jenny, our narrator. At the beginning of the scene Jenny is furious with jealousy, and at the end she has seemingly shed all resentment, having been moved by Margret’s generosity. It is important to note that Margret over the course of the story wins Jenny over and over again while Jenny vacillates between the extremes of Margret’s personality and Kitty’s, between admiring Margret and looking down on her. From this point onward, however, Jenny does not show either jealousy or disdain of Margret again, only sheer joy and contentment at being simply in the company of Margret.</p><p>I argue, then, that this moment is really the most important turning point, even considering the final scene where Margret decides whether or not to bring back painful memories for Chris and let him go back to war. I say this because the most important moments are not dramatic; the most important moments—especially the moments of growth, from which points there would be no going back—such moments are often very quiet, and often go unnoticed but for the person herself, who is irrevocably changed. As Jenny undergoes this transformation under the influence of Margret, so do we, as readers, and I posit that what is at stake in West’s work was not only the soul of Chris, but the soul of Jenny, as well. In this illustration she is temporarily caught in a flash of jealousy, but is twisting and turning, signifying change. The trees in the background surround her and intensify her emotions, echoing the harsh pattern of her dress. The drawing style here is updated from the original illustrations, especially in the way that the human figure is close to the screen and more accessible.</p>", "/images/jenny_return_of_soldier_small.jpg"],
	};


	for (var i = 1; i <= 5; i++) {
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