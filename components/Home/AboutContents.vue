<template>
	<b-container>
		<div class="kolloBox-section">
			<div class="kolloBox-section--inner">
				<b-row class="mx-0" no-gutters>
					<b-col cols="12" md="5">
						<div class="kolloBox-section--wrap">
							<h1 class="kolloBox-section--heading">
								<span> Grow your business with JustBank </span>
							</h1>
							<p class="kolloBox-section--max color-black mb-0">
								JustBank is not a regular bank, we are a bank designed to
								empower the young people doing business.
							</p>
							<a href="" class="learn-more color-primary">
								Setup your Account in Seconds
								<span style="margin-left: 4px">
									<arrow-right
										class="m-auto"
										style="fill: var(--color-primary)"
									/>
								</span>
							</a>
						</div>
					</b-col>
					<b-col cols="12" md="7">
						<build-business class="w-100 mt-64" style="" />
					</b-col>
				</b-row>
			</div>
		</div>
	</b-container>
</template>

<script>
import ArrowRight from "~/assets/svg/icons/arrow-right.svg?inline";
import BuildBusiness from "~/assets/svg/build-business.svg?inline";
export default {
	components: {
		ArrowRight,
		BuildBusiness,
	},
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
	.mt-64 {
		margin-top: -80px;
	}
}
</style>