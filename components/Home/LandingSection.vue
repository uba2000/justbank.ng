<template>
	<section class="main-section home-section">
		<b-container>
			<b-row class="mx-0" no-gutters>
				<b-col cols="12" md="7" class="mt-5 mt-md-0 d-flex align-items-center">
					<div class="text-section text-white w-100 text-uppercase">
						<span>
							<h1 class="title-style d-md-block d-none">The Game Changer</h1>
							<h1 class="title-style text-center d-md-none d-block">
								The Game Changer
							</h1>
							<div style="height: 0px"></div>
							<p class="subTitle-style d-md-block d-none">
								The bank of the Young Entrepreneurs
							</p>
						</span>
						<div class="links-btn d-none">
							<!-- d-flex -->
							<a href="" class="mr-2 btn btn-primary"> Get Started </a>
						</div>
					</div>
				</b-col>
				<b-col cols="12" md="5">
					<div class="illustration-section">
						<div class="d-flex position-relative flex-column">
							<img
								src="
									~/assets/img/landing-illustration-removebg-trans.png
								"
								alt="card-app"
								class="landing_image"
							/>
							<div style="height: 20px"></div>
							<div class="d-md-none d-block text-center text-white">
								<p class="subTitle-style text-uppercase">
									The bank of the Young Entrepreneurs
								</p>
							</div>
						</div>
					</div>
				</b-col>
			</b-row>
		</b-container>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.landing_image {
	max-width: 497px;
	width: 100%;
	margin: 0 auto;
	border-radius: 6px;
	height: auto;
}
</style>