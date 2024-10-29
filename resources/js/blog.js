// Const variables
const API_URL = 'http://localhost:8010/api/';
const BASE_URL = '/';

// // execute when page load
// $(document).ready(async function () {
// 	// await getBlogs();
// })


const getBlogs = async () => {
	// let request = $.ajax({
	// 	url: API_URL + "getBlogs",
	// 	type: "GET",
	// 	dataType: "JSON"
	// });
	// request.done(function (result) {
	// 	if (result.success) {
			// let blogs = result.data;

			let blogs = [
				{
					"id": 101,
					"title": "Master the Game with Fantasy Sports Insights and Tips",
					"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
					"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
					"image": "./resources/images/blog/cricket-ball.png",
					"comment_count": "5",
					"datetime": "2024-11-28"
				},
				{
					"id": 102,
					"title": "Master the Game with Fantasy Sports Insights and Tips",
					"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
					"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
					"image": "./resources/images/blog/cricket-ball.png",
					"comment_count": "20",
					"datetime": "2024-11-27"
				},
				{
					"id": 103,
					"title": "Master the Game with Fantasy Sports Insights and Tips",
					"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
					"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
					"image": "./resources/images/blog/cricket-ball.png",
					"comment_count": "10",
					"datetime": "2024-11-26"
				}
			]
			
			let listItme = ``;

			for (let i = 0; i < 3; i++) {
				let labels = blogs[i].labels.split(', ');
				listItme += `<div class="swiper-slide">
							<div class="pb-5 row">
								<div class="col-lg-6 mb-5 mb-lg-0">
									<div class="position-relative">
										<img src="`+ blogs[i].image + `" alt="` + blogs[i].title + `"
											class="img-fluid blog_bg_img" />
										<div class="content">
											<div>
												<h5>`+ blogs[i].title + `</h5>
												<div class="d-flex justify-content-between align-items-center mt-3">
													<div>
														<div class="date_post">
															`+ blogs[i].datetime + `
															<span style="color: #58aeff;">/ `+ blogs[i].comment_count + `
																Comments</span>
														</div>
													</div>
													<a href="`+ BASE_URL + `blogDetail?id=` + blogs[i].id + `" class="read_more">
														<span class="me-1">Read More</span>
														<span class="fs-5 d-flex text-white">
															<i class="fa-solid fa-arrow-up" style="transform: rotate(45deg); color: gray"></i>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="position-relative">
										<h4>
											<span class="buttom_line">Featured News</span>
										</h4>
									</div>
									<h5 class="mt-4">`+ blogs[i].title + `</h5>
									<p class="mt-3">`+ blogs[i].short_description + `</p>`;

				if (labels.length > 0) {

					listItme += `<div class="">
										<p class="fs-4">Labels</p>
										<div class="row">`;
					for (let j = 0; j < labels.length; j++) {
						listItme += `<div class="col-lg-auto col-xs-auto col-sm-6">
												<div class="d-flex align-items-center justify-content-start">
													<div class="me-2"><img src="resources/images/blog/labels.png" alt="label tag" />
													</div>
													<span style="color: rgba(88, 174, 255, 1)">`+ labels[j] + `</span>
												</div>
											</div>`;
					}
					listItme += `</div>
									</div>`;
				}
				listItme += `</div>
							</div>
						</div>`;
			}

			for (let i = 0; i < 3; i++) {
				
			}

			$('#topThreeBlogs').html(listItme)
	// 	}
	// });

	// request.fail(function (jqXHR, textStatus) {
	// 	console.log('Something went wrong!');
	// 	alert('Something went wrong!');
	// });
}

const getBlogDetail = async (id) => {
	// let request = $.ajax({
	// 	url: API_URL + "getBlogDetail?id=" + id,
	// 	type: "GET",
	// 	dataType: "JSON"
	// });
	// request.done(function (result) {
	// 	if (result.success) {
			// let blogDetail = result.data;

			let blogDetail = {
				"id": 101,
				"title": "Master the Game with Fantasy Sports Insights and Tips",
				"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
				"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
				"description": `<p>From its humble origins as a way to manage teams and players to a multibillion-dollar
										business, this virtual world fundamentally changed our passion for games.</p>
	
									<p>But what exactly is pushing such exponential growth? Why are fantasy leagues drawing
										in individuals from all walks of life, from the casual spectators to hardcore
										enthusiasts? The appeal goes beyond mere amusement; it taps into essential human
										drives for competition, affiliation and mastery.</p>
	
									<p>This article shall therefore examine five most important factors that have led to
										global domination of fantasy sports taking into account how these are interlinked
										and influencing each other.</p>
	
									<p>With distinctive features that can touch diverse global audiences, such as the thrill
										of one-on-one contests and chances of winning huge monetary awards, fantasy sports
										cricket offer something different from other forms of entertainment worldwide.</p>
	
									<p>With distinctive features that can touch diverse global audiences, such as the thrill
										of one-on-one contests and chances of winning huge monetary awards, fantasy sports
										cricket offer something different from other forms of entertainment worldwide.</p>`,
				"image": "",
				// "image": "./resources/images/blog/cricket-ball.png",
				"comment_count": "5",
				"datetime": "2024-11-28"
			};

			console.log(blogDetail);
			console.log(blogDetail.title);

			let labels = blogDetail.labels.split(', ');
			let labelsHtml = ``;
			if (labels.length > 0) {
				for (let j = 0; j < labels.length; j++) {
					labelsHtml += `<div class="col-lg-auto col-xs-auto col-sm-6">
											<div class="d-flex align-items-center justify-content-start">
												<div class="me-2"><img src="resources/images/blog/labels.png" alt="label tag" />
												</div>
												<span style="color: rgba(88, 174, 255, 1)">`+ labels[j] + `</span>
											</div>
										</div>`;
				}
			}
			else {
				// $('#blogLabelSection').hide();
			}
			let blogImage = "../resources/images/blog/cricket-ball.png";
			if(blogDetail.image && blogDetail.image != ""){
				blogImage = blogDetail.image;
			}
			let blogImageHtml = `<img src="`+blogImage+`" alt="` + blogDetail.title + `" class="img-fluid" />`;

			$('#blogTitle').html(blogDetail.title);
			$('#blogImage').html(blogImageHtml);
			$('#blogDate').html(blogDetail.datetime);
			$('#blogLabels').html(labelsHtml);
			$('#blogShortDescription').html(blogDetail.short_description);
			$('#blogDescription').html(blogDetail.description);
	// 	}
	// });
	// request.fail(function (jqXHR, textStatus) {
	// 	console.log('Something went wrong!');
	// 	alert('Something went wrong!');
	// });
}