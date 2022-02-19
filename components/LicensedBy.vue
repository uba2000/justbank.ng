<template>
	<div class="kolloBox-app--licenses">
		<span class="single-license">
			<license-1 />
		</span>
		<span class="single-license">
			<license-2 />
		</span>
	</div>
</template>

<script>
import License1 from "/assets/svg/license-1.svg?inline";
import License2 from "/assets/svg/license-2.svg?inline";
export default {
	components: {
		License1,
		License2,
	}
};
</script>

<style lang="scss" scoped>
.single-license {
	&:not(:last-child) {
		margin-right: 16px;
	}
}
</style>