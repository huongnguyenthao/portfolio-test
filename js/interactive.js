

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
     "1":["Wireframes for Classifieds Android App","Part of the wireframe set I drew for my Summer 2016 internship. This is a <str>classified ads</str> function within a bigger mobile application, with posting, saving, reporting abuse, and drafting features, among others.", "/images/wireframe.jpg"], 
     "2":["Explore H. D.'s novel, Bid Me to Live, A Madrigal","Link to project: <a href=\"https://bidmetolive.wordpress.com\">Bid Me to Live on Wordpress</a>. <br>This was another creative response to course materials. It’s a multimedia project, the centerpiece of which is an interactive image where visitors can click around and explore the room featured at the end of Bid me to live. While the passages taken from Bid me to live remains relatively untouched, the Van Gogh painting appropriated as the interactive element had been digitally altered. There’s also a bit of coding involved in making the image interactive. <br>Below is the artist statement I wrote for that class. <br>Artist statement<br>Suspended in time and waiting to be turned over and over again in memory, surely the interactive image achieves part of the effect that H. D.’s novel did, had done, will do. Nonetheless, Van Gogh’s Bedroom in Arles was the place where he hoped to start a new community of artists, and as such it is saturated with regret and dreams unrealized, yes, but also with sentiment and with that boundless sense of freedom to create art. Julia’s room in Cornwall was not compared to Van Gogh’s Yellow House without reason, for it is where she will start thinking of cypress trees and writing like Van Gogh painted. <br> This time I again adapt a fictional novel into some modern approximation that cannot possibly have been intended by the author. I think it’s called hypertext fiction, or multimedia project, but if you hover your mouse over various parts of the image, you can click on the links in the image, and you can experience parts of Bid me to live in a new and strange way. Like memories, some pages are harder to find than others, and some are brought to mind by ordinary objects and by association with other ordinary things.", "/images/bid_me_to_live.jpg"], 
     "3":["Which J&#39;Accuse Character Are You?", "Link to take the online quiz: <a href=\"https://www.proprofs.com/quiz-school/story.php?title=what-jaccuse-character-are-you\">https://www.proprofs.com/quiz-school/story.php?title=what-jaccuse-character-are-you</a><br>This was a creative response to course materials. An artist statement was required.<br>Artist Statement: Which J&#39;accuse Character Are You Personality Quiz <br>To take something as serious as J&#39;accuse and make it into a personality quiz must be, I think, the height of Millennial ironic detachment. What can I say? It’s who we are; it’s what we do.  In any case, this quiz is directly styled after Buzzfeed’s What-Harry-Potter-House-Do-You-Belong-To-Style quizzes, and some questions, like Buzzfeed questions, are hopelessly inane and terrible, while some try to talk about the movie itself in this hopelessly inane and terrible format. The range of the quiz options about wars and personal values address the ambiguities and complexities of the movie, while the absurdity of the results demonstrate the presumptuousness of these types of quizzes. The questions may form a coherent meaning, or not, the answers may be randomized, or not, but all the while you can’t help wondering, which J&#39;accuse character <em>are</em> you?", "/images/quiz.jpg"],
	};


	for (var i = 1; i <= 3; i++) {
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