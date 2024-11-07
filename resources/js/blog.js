

const loginUserData = (localStorage.getItem('loginSuccessWeb3Sports') ? JSON.parse(localStorage.getItem('loginSuccessWeb3Sports')) : "");  /// get it from local storage
let user_id = 0;
if (loginUserData != "") {
	user_id = loginUserData?.data.id;
}

const getFeaturedBlog = async () => {
	ajaxCallGet("getFeaturedBlog")
		.then(result => {
			if (result?.success) {
				let blogs = result.data;
				let featuredBlog = ``;
				for (let i = 0; i < blogs.length; i++) {
					let labels = blogs[i]?.labels.split(',');
					let date = new Date(blogs[i]?.created_at);
					let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

					// let labels = blogs[i]?.labels;
					// labels = labels.replace(/["{}]/g, ""); // remove the curly braces and quotes
					// labels = labels.split(", ");
					featuredBlog += `<div class="swiper-slide">
							<div class="pb-5 row">
								<div class="col-lg-6 mb-5 mb-lg-0">
									<div class="position-relative">
										<img src="`+ IMG_URL + blogs[i]?.image + `" alt="` + blogs[i]?.title + `"
											class="img-fluid blog_bg_img" />
										<div class="content">
											<div>
												<h5>`+ blogs[i]?.title + `</h5>
												<div class="d-flex justify-content-between align-items-center mt-3">
													<div>
														<div class="date_post">
															`+ formattedDate + `
															<span style="color: #58aeff;">/ `+ blogs[i]?.comment_count + `
																Comments</span>
														</div>
													</div>
													<a href="`+ BASE_URL + `detail.html?id=` + blogs[i]?.id + `&md=hello&mk=hii,you" class="read_more">
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
									<h5 class="mt-4">`+ blogs[i]?.title + `</h5>
									<p class="mt-3">`+ blogs[i]?.short_description + `</p>`;

					if (labels?.length > 0) {

						featuredBlog += `<div class="">
										<p class="fs-4">Labels</p>
										<div class="row">`;
						for (let j = 0; j < labels?.length; j++) {
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
		})
		.catch(error => {
			console.log(error);
		});
}

const getLatestBlog = async () => {
	ajaxCallGet("getLatestBlog")
		.then(result => {
			if (result?.success) {
				let blogs = result.data;
				let latestBlog = ``;
				for (let i = 0; i < blogs.length; i++) {
					let date = new Date(blogs[i].created_at);
					let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
					latestBlog += `<div class="swiper-slide">
								<div class="" key={index} onClick="goToBlogDetail(` + blogs[i].id + `)">
									<div class="blog_card">
										<img src='`+ IMG_URL + blogs[i].image + `' alt="blog image"
											class="img-fluid w-100" width="20" />
										<div class="blog_card_img">
											<div class="d-flex justify-content-between align-items-center">
												<img src="./resources/images/blog/card_icn.png" alt="logo icon"
													class="img-fluid blg_icn" />
												<div class="px-2">
													<Link class="text-decoration-none text-black">`+ blogs[i].title.substring(0, 35) + `
													</Link>
													<div>`+ formattedDate + `</div>
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
		})
		.catch(error => {
			console.log(error);
		});
}

const goToBlogDetail = (id) => {
	window.location.href = BASE_URL + 'detail.html?id=' + id
}

const getBlogDetail = async (id) => {
	let endPoint = "getBlogDetail?blog_id=" + id;
	ajaxCallGet(endPoint)
		.then(result => {
			if (result?.success) {
				let blogDetail = result.data;
				let labels = blogDetail.labels.split(',');
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
					blogImage = IMG_URL + blogDetail.image;
				}
				let blogImageHtml = `<img src="` + blogImage + `" alt="` + blogDetail.title + `" class="img-fluid" />`;

				let date = new Date(blogDetail.created_at);
				let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
				$('#blogTitle').html(blogDetail.title);
				$('#blogImage').html(blogImageHtml);
				$('#blogDate').html(formattedDate);
				$('#blogLabels').html(labelsHtml);
				$('#blogShortDescription').html(blogDetail.short_description);
				$('#blogDescription').html(blogDetail.description);
			}
		})
		.catch(error => {
			console.log(error);
		});
}

const getComments = async (blog_id) => {
	let endPoint = "getComments?blog_id=" + blog_id;
	ajaxCallGet(endPoint)
		.then(result => {
			if (result?.success) {
				let data = result.data;
				$('#blogCommentCount').html(data.length)
				let comments = ``;
				for (let i = 0; i < data.length; i++) {
					let date = new Date(data[i].created_at);
					let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

					comments += `<div class="comment_box mt-4">
											<div class="comment_wrapper">
												<div class="d-flex align-items-center justify-content-start">
													<img src="`+ data[i].profile_pic + `"
														class="p_p img-fluid me-2">

													<div class="name mb-0 me-5">`+ data[i].name + `</div>
												</div>
												<p class="time mb-0">`+ formattedDate + `</p>
											</div>
											<p class="comment">`+ data[i].comment + `</p>

											<div class="feature d-flex align-items-center">
												<span class="like me-4" onclick="likeThisComment(`+ data[i].id + `, ` + blog_id + `)">
													<i class="fa-regular fa-thumbs-up"></i> &nbsp; `+ data[i].like_count + `
												</span>

											</div>

											<hr class="mt-2">
										</div>`;
				}
				// <i class="fa-solid fa-thumbs-up"></i>
				$('#commentBox').html(comments);
			}
		})
		.catch(error => {
			console.log(error);
		});
}

const likeThisComment = (comment_id, blog_id) => {

	if (loginUserData == "") {
		showAlert('ERROR', 'Login required!!!!!')
		return;
	}
	else {
		let TOKEN = loginUserData?.data.authToken;
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

	let body = {
		'name': $('#name').val(),
		'email': $('#email').val(),
		'comment': $('#comment').val(),
		'blog_id': $('#blog_id').val(),
		'website': $('#website').val(),
		'user_id': user_id
	}
	ajaxCallPost("submitComment", body)
		.then(result => {
			if (result?.success) {
				$('.form_control').removeClass('requiredThis')
				$('#name').val("");
				$('#email').val("");
				$('#website').val("");
				$('#comment').val("");
				$('#resMsg').html(`<p class="alert alert-success">Comment submitted successfully.</p>`);
			}
			else {
				returnError(result?.msg);
				return;
			}
		})
		.catch(error => {
			console.log(error);
			returnError('Something went wrong. Please try again!');
			return;
		});
}

const getBlogCategories = async () => {
	ajaxCallGet('getBlogCategories')
		.then(result => {
			if (result?.success) {
				let data = result.data;
				let list = ``;
				for (let i = 0; i < data.length; i++) {
					list += `<div class="col-xs-auto col-md-auto col-lg-auto col-xl-auto">
								<a href="`+ BASE_URL + `category-blog.html?c=` + data[i].id + `&cn=` + data[i].category_name + `" class="text-decoration-none">
									<Button class="px-4 btn btn-primary-outline-btn">`+ data[i].category_name + `</Button>
								</a>
							</div>`;
				}
				$('#blogCategories').html(list);
			}
		})
		.catch(error => {
			// handle error
			console.log(error);
		});

}

// 
const getBlogsByCategory = async (category_id) => {
	let endPoint = "getBlogsByCategory?category_id=" + category_id;
	ajaxCallGet(endPoint)
		.then(result => {
			if (result?.success) {
				let blogs = result.data;
				let list = ``;
				for (let i = 0; i < blogs.length; i++) {
					let date = new Date(blogs[i].created_at);
					let formattedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

					list += `<div class="swiper-slide">
								<div class="" key={index} onClick="goToBlogDetail(` + blogs[i].id + `)">
									<div class="blog_card">
										<img src='`+ IMG_URL + blogs[i].image + `' alt="blog image"
											class="img-fluid w-100" width="20" />
										<div class="blog_card_img">
											<div class="d-flex justify-content-between align-items-center">
												<img src="./resources/images/blog/card_icn.png" alt="logo icon"
													class="img-fluid blg_icn" />
												<div class="px-2">
													<Link class="text-decoration-none text-black">`+ blogs[i].title.substring(0, 35) + `
													</Link>
													<div>`+ formattedDate + `</div>
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
				// <i class="fa-solid fa-thumbs-up"></i>
				$('#blogsByCategory').html(list);
			}
		})
		.catch(error => {
			console.log(error);
		});
}

const shareOnTwitterX = (url) => {
	var twitterWindow = window.open('https://twitter.com/share?url=' + url, 'twitter-popup');
	if (twitterWindow.focus) { twitterWindow.focus(); }
	return false;
}

const shareOnFacebook = (url) => {
	var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-popup');
	if (facebookWindow.focus) { facebookWindow.focus(); }
	return false;
}

const shareOnLinkedIn = (url) => {
	var linkedinWindow = window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url, 'Linkedin-popup');
	if (linkedinWindow.focus) { linkedinWindow.focus(); }
	return false;
}

const shareOnTelegram = (url) => {
	var linkedinWindow = window.open('https://t.me/share/url?url=' + url, 'Telegram-popup');
	if (linkedinWindow.focus) { linkedinWindow.focus(); }
	return false;
}



////////////////// Press Release script ///////////////////////////////

const getPressRelease = async () => {
	ajaxCallGet('getPressRelease')
		.then(result => {
			if (result?.success) {
				let listData = result.data;
				let list = ``;
				for (let i = 0; i < listData.length; i++) {
					list += `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <a target="__blank" href="`+ listData[i].url + `" class="text-decoration-none">
                            <div class="press_card">
                                <img src="`+ IMG_URL + listData[i].image + `" alt="` + listData[i].title + `" class="img-fluid">
								<div class='p-2'>
                                  <p class="my-2 text-white">`+ listData[i].title + `</p>
                                  <p class="my-2 text-white">`+ listData[i].short_description + `</p>
								</div>
                            </div>
                        </a>
                    </div>`;
				}
				$('#pressRelease').html(list);
			}
		})
		.catch(error => {
			console.log(error);
		});
}

/////////////////// AJAX Generic Functions to make GET & POST requests ///////////////////////////////
const ajaxCallGet = (endPoint) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: API_URL + endPoint,
			type: "GET",
			dataType: "json",
			success: function (result) {
				resolve(result);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.error('Error: ' + textStatus, errorThrown);
				reject('Something went wrong!');
			}
		});
	});
}

const ajaxCallPost = (endPoint, body) => {
	return new Promise((resolve, reject) => {
		$.ajax({
			url: API_URL + endPoint,
			type: "POST",
			data: body,
			dataType: "json",
			success: function (result) {
				resolve(result);
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.error('Error: ' + textStatus, errorThrown);
				reject('Something went wrong!');
			}
		});
	});
}

//  Toaster

const showAlert = (type, msg) => {
	toastr.options = {
		"closeButton": true,
		"newestOnTop": false,
		"progressBar": true,
		"positionClass": "toast-top-center",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	}
	if (type == "SUCCESS") {
		toastr.success(msg);
	}
	else if (type == "WARNING") {
		toastr.warning(msg);
	}
	else if (type == "ERROR") {
		toastr.error(msg);
	}
}