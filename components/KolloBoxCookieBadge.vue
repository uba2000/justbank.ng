<template>
	<div class="kolloBox-cookie--badge animateDown">
		<p class="mb-0">
			By using this website you agree to our
			<a href="" class="text-underline color-primary">cookie policy</a>.
		</p>
		<span class="btn btn-secondary" @click="$store.dispatch('toggleCookieBox')"
			>Dismiss</span
		>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.kolloBox-cookie--badge {
	background: #fbfbfb;
	border: 1px solid rgba(224, 221, 221, 0.5);
	box-shadow: 0 0 25px rgba(0, 0, 0, 0.06);
	border-radius: 10px;
	width: auto;
	position: fixed;
	bottom: 40px;
	padding: 20px 10px 20px 20px;
	height: 59px;
	left: 50%;
	transform: translateX(-50%);
	color: #000;
	font-size: 1rem;
	justify-content: space-between;
	display: flex !important;
	align-items: center !important;
	z-index: 99;
	p {
		margin-right: 30px;
		white-space: nowrap;
		line-height: 1.28;

		a {
			text-decoration: underline;
			&:hover {
				color: var(--color-primary);
			}
		}
	}
	span {
		height: 40px;
		border-color: rgba(224, 221, 221, 0.5);
		background-color: var(--color-primary-light);
		color: var(--color-primary);
		font-size: 0.875rem;
	}
}
@media only screen and (max-width: 767px) {
	.kolloBox-cookie--badge {
		position: fixed;
		bottom: 0 !important;
		border: 0;
		border-radius: 0;
		width: 100%;
		height: 80px;
		> * {
			position: relative;
			top: -1.3px;
		}
		p {
			white-space: normal !important;
		}
	}
}
</style>