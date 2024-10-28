// Const variables
const API_URL = 'http://localhost:8010/api/';


// execute when page load
$(document).ready(async function () {
  await getBlogs();
})


const getBlogs = async () => {
  let request = $.ajax({
    url: API_URL + "getBlogs",
    type: "GET",
    dataType: "JSON"
  });
  request.done(function (result) {
    if (result.success) {
      let blogs = result.data;
      let listItme = ``;
      for (let i = 0; i < 3; i++) {
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
															<span style="color: #58aeff;">/ `+ blogs[i].commentCount + `
																Comments</span>
														</div>
													</div>
													<a class="read_more">
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
									<p class="mt-3">`+ blogs[i].shortDescription + `</p>`;

        if (blogs[i].labels.length && blogs[i].labels.length > 0) {

          listItme += `<div class="">
										<p class="fs-4">Labels</p>
										<div class="row">`;
          for (let j = 0; j < blogs[i].labels.length; j++) {
            listItme += `<div class="col-lg-auto col-xs-auto col-sm-6">
												<div class="d-flex align-items-center justify-content-start">
													<div class="me-2"><img src="resources/images/blog/labels.png" alt="label tag" />
													</div>
													<span style="color: rgba(88, 174, 255, 1)">`+ blogs[i].labels[j] + `</span>
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
      $('#topThreeBlogs').html(listItme)
    }
  });

  request.fail(function (jqXHR, textStatus) {
    console.log('Something went wrong!')
    alert('Something went wrong!')
  });
}