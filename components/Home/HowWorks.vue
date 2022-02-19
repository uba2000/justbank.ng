<template>
	<div id="how-it-works">
		<b-container>
			<div class="text-center kolloBox-section">
				<div
					class="
						kolloBox-entry--inner
						kolloBox-cta--section
						justify-content-between
						align-items-center
					"
				>
					<h2 class="how-works-title kolloBox-section--heading">
						Top <span class="color-org">Offers</span>
					</h2>
					<b-row class="mx-0" no-gutters>
						<b-col cols="12" md="4" class="p-3">
							<div class="text-center position-relative how-works-content">
								<div class="image-wrapper">
									<img src="~/assets/img/decors/1.png" alt="1" />
								</div>
								<div class="content-wrapper">
									<div>
										<h3>Create your Account</h3>
										<span
											>Create an Account today on JustBank and begin your
											journey to happiness.</span
										>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="12" md="4" class="p-3">
							<div class="text-center position-relative how-works-content">
								<div class="image-wrapper">
									<img src="~/assets/img/decors/2.png" alt="2" />
								</div>
								<div class="content-wrapper">
									<div>
										<h3>Earn with JustBank</h3>
										<span
											>Learn how you can earn with JustBank today. This is a
											solution tailored to help young people create a source of
											income.</span
										>
									</div>
								</div>
							</div>
						</b-col>
						<b-col cols="12" md="4" class="p-3">
							<div class="text-center position-relative how-works-content">
								<div class="image-wrapper">
									<img src="~/assets/img/decors/3.png" alt="3" />
								</div>
								<div class="content-wrapper">
									<div>
										<h3>Save Up</h3>
										<span>
											Save up for a business project, tap into the opportunity
											of raising more funds for your business.
										</span>
									</div>
								</div>
							</div>
						</b-col>
					</b-row>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#how-it-works {
	background-color: #fafafa;
}
.kolloBox-section {
	position: relative;
	min-height: 530px;
	.kolloBox-entry--inner {
		position: absolute;
		margin-top: -12.5%;
		background-color: #fff !important;
	}
}

@media screen and (max-width: 767px) {
	.kolloBox-section {
		min-height: 1430px;
	}
}
.how-works-title {
	font-size: 39px;
	padding-top: 100px;
	padding-bottom: 50px;
	padding-top: 25px;
	padding-bottom: 10px;
	position: relative;
	// background-color: #fff;
	z-index: 10;
}

.how-works-content {
	.image-wrapper {
		min-height: 60px;
		margin-bottom: 101px;
		margin-top: 25px;
		img {
			position: absolute;
			right: calc(50% - 85px);
			top: -28px;
			margin-bottom: 20px;
		}
	}
	.content-wrapper {
		position: relative;
		min-height: 190px;
		font-size: 23px;
		h3 {
			margin-bottom: 10px;
			font-family: Poppins-SemiBold, serif;
			color: var(--color-primary);
		}
		span {
			line-height: 24px;
			font-family: Poppins-Regular;
			font-size: 14px;
			display: inline-block;
		}
	}
}
</style>