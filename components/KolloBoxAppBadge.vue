<template>
	<div class="kolloBox-app--badges">
		<a href="" class="single-badge">
			<apple-badge />
		</a>
		<a href="" class="single-badge">
			<google-badge />
		</a>
	</div>
</template>

<script>
import AppleBadge from "/assets/svg/apple-store-badge.svg?inline";
import GoogleBadge from "/assets/svg/apple-store-badge.svg?inline";
export default {
	components: {
		AppleBadge,
		GoogleBadge,
	}
};
</script>

<style lang="scss" scoped>
.single-badge {
	display: inline-flex;
	transition: transform 0.6s;

	svg {
		height: 40px;
		width: auto;
	}

	&:not(:last-child) {
		margin-right: 11px;
	}
}
</style>