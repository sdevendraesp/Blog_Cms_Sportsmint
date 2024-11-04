// Const variables Dev Server
const API_URL = 'https://sportsmint.espsofttechnologies.com/v1/';
const BASE_URL = 'https://sportsmint.espsofttechnologies.com/blog/';

// Const variables Live Server
// const API_URL = 'https://sportsmint.io/v1/';
// const BASE_URL = 'https://sportsmint.io/';

// let blogs = [
// 	{
// 		"id": 3,
// 		"title": "Master the Game with Fantasy Sports Insights and Tips",
// 		"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
// 		"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
// 		"image": "./resources/images/blog/cricket-ball.png",
// 		"comment_count": "5",
// 		"datetime": "2024-11-28"
// 	},
// 	{
// 		"id": 3,
// 		"title": "Master the Game with Fantasy Sports Insights and Tips",
// 		"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
// 		"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
// 		"image": "./resources/images/blog/cricket-ball.png",
// 		"comment_count": "20",
// 		"datetime": "2024-11-27"
// 	},
// 	{
// 		"id": 3,
// 		"title": "Master the Game with Fantasy Sports Insights and Tips",
// 		"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
// 		"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
// 		"image": "./resources/images/blog/cricket-ball.png",
// 		"comment_count": "",
// 		"datetime": "2024-11-26"
// 	},
// 	{
// 		"id": 3,
// 		"title": "Master the Game with Fantasy Sports Insights and Tips",
// 		"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
// 		"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
// 		"image": "./resources/images/blog/cricket-ball.png",
// 		"comment_count": "20",
// 		"datetime": "2024-11-27"
// 	},
// 	{
// 		"id": 3,
// 		"title": "Master the Game with Fantasy Sports Insights and Tips",
// 		"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
// 		"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
// 		"image": "./resources/images/blog/cricket-ball.png",
// 		"comment_count": "20",
// 		"datetime": "2024-11-27"
// 	},
// ]


const getFeaturedBlog = async () => {
	let request = $.ajax({
		url: API_URL + "getFeaturedBlog",
		type: "GET",
		dataType: "JSON"
	});
	request.done(function (result) {
		if (result.success) {
			let blogs = result.data;

			let featuredBlog = ``;

			for (let i = 0; i < 5; i++) {
				let labels = blogs[i].labels.split(', ');
				featuredBlog += `<div class="swiper-slide">
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

					featuredBlog += `<div class="">
										<p class="fs-4">Labels</p>
										<div class="row">`;
					for (let j = 0; j < labels.length; j++) {
						featuredBlog += `<div class="col-lg-auto col-xs-auto col-sm-6">
												<div class="d-flex align-items-center justify-content-start">
													<div class="me-2"><img src="resources/images/blog/labels.png" alt="label tag" />
													</div>
													<span style="color: rgba(88, 174, 255, 1)">`+ labels[j] + `</span>
												</div>
											</div>`;
					}
					featuredBlog += `</div>
									</div>`;
				}
				featuredBlog += `</div>
							</div>
						</div>`;
			}
			$('#featuredBlog').html(featuredBlog);

		}
	});

	request.fail(function (jqXHR, textStatus) {
		console.log('Something went wrong!');
		alert('Something went wrong!');
	});
}

const getLatestBlog = async () => {
	let request = $.ajax({
		url: API_URL + "getLatestBlog",
		type: "GET",
		dataType: "JSON"
	});
	request.done(function (result) {
		if (result.success) {
			let blogs = result.data;

			let latestBlog = ``;
			for (let i = 0; i < blogs.length; i++) {


				latestBlog += `<div class="swiper-slide">
								<div class="" key={index} onClick="goToBlogDetail(` + blogs[i].id + `)">
									<div class="blog_card">
										<img src='../resources/images/blog/card1.png' alt="blog image"
											class="img-fluid w-100" width="20" />
										<div class="blog_card_img">
											<div class="d-flex justify-content-between align-items-center">
												<img src="../resources/images/blog/card_icn.png" alt="logo icon"
													class="img-fluid blg_icn" />
												<div class="px-2">
													<Link class="text-decoration-none text-black">`+ blogs[i].title.substring(0, 35) + `
													</Link>
													<div>`+ blogs[i].datetime + `</div>
												</div>
												<span class="fs-4" style="color:gray">
													<i class="fa-solid fa-arrow-up"
														style="transform: rotate(45deg);"></i>
												</span>
											</div>

											<p style="color:rgba(111, 111, 111, 1)" class="mt-3">`+ blogs[i].short_description.substring(0, 75) + `... <b>Read More</b></p>
										</div>
									</div>
								</div>
							</div>`;
			}
			$('#latestBlog').html(latestBlog)

		}
	});

	request.fail(function (jqXHR, textStatus) {
		console.log('Something went wrong!');
		alert('Something went wrong!');
	});
}

const goToBlogDetail = (id) => {
	window.location.href = BASE_URL + 'blogDetail?id=' + id
}

const getBlogDetail = async (id) => {
	let request = $.ajax({
		url: API_URL + "getBlogDetail?blog_id=" + id,
		type: "GET",
		dataType: "JSON"
	});
	request.done(function (result) {
		if (result.success) {
			let blogDetail = result.data;

			// let blogDetail = {
			// 	"id": 4,
			// 	"title": "Master the Game with Fantasy Sports Insights and Tips",
			// 	"short_description": "Fantasy sports have taken the world by storm, offering fans an exciting way to engage with their favorite sports and athletes. Whether you're new to the game or a seasoned veteran, crafting the perfect team requires strategy, knowledge, and a little bit of luck. Here are some essential tips to help you dominate your league on SportsMint and come out on top.",
			// 	"labels": "fantasy cricket, fantasy cricket league, indian fantasy cricket, fantasy sports",
			// 	"description": `<p>From its humble origins as a way to manage teams and players to a multibillion-dollar
			// 									business, this virtual world fundamentally changed our passion for games.</p>

			// 								<p>But what exactly is pushing such exponential growth? Why are fantasy leagues drawing
			// 									in individuals from all walks of life, from the casual spectators to hardcore
			// 									enthusiasts? The appeal goes beyond mere amusement; it taps into essential human
			// 									drives for competition, affiliation and mastery.</p>

			// 								<p>This article shall therefore examine five most important factors that have led to
			// 									global domination of fantasy sports taking into account how these are interlinked
			// 									and influencing each other.</p>

			// 								<p>With distinctive features that can touch diverse global audiences, such as the thrill
			// 									of one-on-one contests and chances of winning huge monetary awards, fantasy sports
			// 									cricket offer something different from other forms of entertainment worldwide.</p>

			// 								<p>With distinctive features that can touch diverse global audiences, such as the thrill
			// 									of one-on-one contests and chances of winning huge monetary awards, fantasy sports
			// 									cricket offer something different from other forms of entertainment worldwide.</p>`,
			// 	"image": "",
			// 	// "image": "./resources/images/blog/cricket-ball.png",
			// 	"comment_count": "5",
			// 	"datetime": "2024-11-28"
			// };

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
			if (blogDetail.image && blogDetail.image != "") {
				blogImage = blogDetail.image;
			}
			let blogImageHtml = `<img src="` + blogImage + `" alt="` + blogDetail.title + `" class="img-fluid" />`;

			$('#blogTitle').html(blogDetail.title);
			$('#blogImage').html(blogImageHtml);
			$('#blogDate').html(blogDetail.datetime);
			$('#blogLabels').html(labelsHtml);
			$('#blogShortDescription').html(blogDetail.short_description);
			$('#blogDescription').html(blogDetail.description);
		}
	});
	request.fail(function (jqXHR, textStatus) {
		console.log('Something went wrong!');
		alert('Something went wrong!');
	});
}

const getComments = async (blog_id) => {
	let request = $.ajax({
		url: API_URL + "getComments?blog_id=" + blog_id,
		type: "GET",
		// data :{blog_id},
		dataType: "JSON"
	});
	request.done(function (result) {
		if (result.success) {
			let data = result.data;
			$('#blogCommentCount').html(data.length)
			let comments = ``;
			for (let i = 0; i < data.length; i++) {
				let date = new Date(data[i].created_at);
				let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

				comments += `<div class="comment_box mt-4">
											<div class="comment_wrapper">
												<div class="d-flex align-items-center justify-content-start">
													<img src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
														class="p_p img-fluid me-2">

													<div class="name mb-0 me-5">`+ data[i].name + `</div>
												</div>
												<p class="time mb-0">`+ formattedDate + `</p>
											</div>
											<p class="comment">`+ data[i].comment + `</p>

											<div class="feature d-flex align-items-center">
												<span class="like me-4" onclick="likeThisComment(`+ data[i].id + `, ` + blog_id + `)">
													<i class="fa-regular fa-thumbs-up"></i>
												</span>

											</div>

											<hr class="mt-2">
										</div>`;
			}
			// <i class="fa-solid fa-thumbs-up"></i>
			$('#commentBox').html(comments);
		}
	});

	request.fail(function (jqXHR, textStatus) {
		console.log('Something went wrong!');
		alert('Something went wrong!');
	});
}

const likeThisComment = (comment_id, blog_id) => {
	let loginUserData = (localStorage.getItem('loginSuccessWeb3Sports') ? JSON.parse(localStorage.getItem('loginSuccessWeb3Sports')) : "");  /// get it from local storage
	if (loginUserData == "") {
		alert('Login required!!!!!')
		return;
	}
	else {
		let TOKEN = loginUserData.data.authToken;
		$.ajax({
			type: "POST",
			url: API_URL + "likeThisComment",
			data: { comment_id },
			headers: {
				"Authorization": TOKEN
			},
			dataType: "JSON",
			success: function (result) {
				console.log(result)
				if (result?.success) {
					getComments(blog_id)
				}
			},
			error: function (data) {
				console.log('An error occurred.');
				return;
			},
		});
	}
}

const returnError = (element) => {
	$('.form_control').removeClass('requiredThis')
	$('#' + element).addClass('requiredThis')
	$('#resMsg').html(`<p class="alert alert-danger"> Please fill required fields!</p>`);
	setTimeout(() => {
		$('#resMsg').html(``);
	}, 2000)
}


const commentFormSubmit = () => {
	let loginUserData = (localStorage.getItem('loginSuccessWeb3Sports') ? JSON.parse(localStorage.getItem('loginSuccessWeb3Sports')) : "");  /// get it from local storage
	let user_id = null;
	if (loginUserData != "") {
		user_id = loginUserData?.data.id;
	}

	if ($('#name').val() == "") {
		returnError('name');
		return;
	}
	else if ($('#email').val() == "") {
		returnError('email');
		return;
	}
	else if ($('#comment').val() == "") {
		returnError('comment');
		return;
	}
	// let form = $('#blogCommentForm');
	try {
		$.ajax({
			type: "POST",
			url: API_URL + "submitComment",
			data: {
				'name':$('#name').val(),
				'email':$('#email').val(),
				'comment':$('#comment').val(),
				'blog_id':$('#blog_id').val(),
				'website':$('#website').val(),
				'user_id':user_id
			},
			dataType: "JSON",
			success: function (result) {
				if (result?.data.success) {
					$('#resMsg').html(`<p class="alert alert-success">Comment submitted successfully.</p>`);
				}
				else {
					returnError(result.data.msg);
					return;
				}
			},
			error: function (data) {
				console.log('An error occurred.');
				returnError('Something went wrong. Please try again!');
				return;
			},
		});
	} catch (error) {
		returnError('Something went wrong. Please try again!');
		return;
	}
}




const getBlogCategories = async () => {
	// let request = $.ajax({
	// 	url: API_URL + "getBlogCategories",
	// 	type: "GET",
	// 	dataType: "JSON"
	// });
	// request.done(function (result) {
	// 	if (result.success) {
	// 		let data = result.data;

	let data = [
		{
			"id":1,
			"category":"Games",
		},
		{
			"id":1,
			"category":"Sports",
		},
		{
			"id":1,
			"category":"Cricket",
		},
		{
			"id":1,
			"category":"Fantacy",
		}
	]
			let list = ``;
			for (let i = 0; i < data.length; i++) {
				list += `<div class="col-xs-auto col-md-auto col-lg-auto col-xl-auto">
								<a href="`+BASE_URL+`categoryBlog.html?q=`+data[i].id+`" class="text-decoration-none">
									<Button class="px-4 mb-4 btn btn-primary-outline-btn">`+data[i].category+`</Button>
								</a>
							</div>`;
			}
			$('#blogCategories').html(list);
	// 	}
	// });

	// request.fail(function (jqXHR, textStatus) {
	// 	console.log('Something went wrong!');
	// 	alert('Something went wrong!');
	// });
}

// 
const getBlogsByCategory = async (category_id) => {
	let request = $.ajax({
		url: API_URL + "getBlogsByCategory?category_id=" + category_id,
		type: "GET",
		dataType: "JSON"
	});
	request.done(function (result) {
		if (result.success) {
			let data = result.data;
			let list = ``;
			for (let i = 0; i < data.length; i++) {
				let date = new Date(data[i].created_at);
				let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

				list += ``;
			}
			// <i class="fa-solid fa-thumbs-up"></i>
			$('#blogsByCategory').html(list);
		}
	});

	request.fail(function (jqXHR, textStatus) {
		console.log('Something went wrong!');
		alert('Once Aman sir will provide APIs I will dissappear from here!');
	});
}