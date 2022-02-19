<template>
	<b-container>
		<div class="kolloBox-section">
			<div
				class="
					kolloBox-entry--inner
					kolloBox-cta--section
					justify-content-between
					align-items-center
				"
			>
				<b-row class="mx-0" no-gutters>
					<b-col cols="12" md="6">
						<div class="kolloBox-main--wrap">
							<h1 class="kolloBox-section--heading">
								Get the app now and grow your business.
							</h1>
							<p>
								It takes a few minutes to make your business successful.<br />
								Download JustBank on the App Store or Google Play.
							</p>
							<kollo-box-app-badge class="d-md-none" />
							<licensed-by class="d-none" />
							<div class="">
								<a href="" class="btn btn-primary">Get JustBank</a>
							</div>
						</div>
					</b-col>
					<b-col cols="12" md="6" class="d-none d-md-block">
						<div class="ct-illustration">
							<img
								src="~/assets/img/app/app-1.png"
								alt=""
								height="350"
								width="500"
								style="object-fit: contain; transform: rotateZ(340deg)"
							/>
						</div>
					</b-col>
				</b-row>
			</div>
		</div>
	</b-container>
</template>

<script>
import KolloBoxAppBadge from "./KolloBoxAppBadge.vue";
import LicensedBy from "./LicensedBy.vue";
export default {
	components: { KolloBoxAppBadge, LicensedBy },
};
</script>

<style lang="scss" scoped>
.ct-illustration {
	position: absolute;
	width: 40%;
	height: auto;
	min-width: 435px;
}
</style>