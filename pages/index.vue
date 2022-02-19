<template>
	<div>
		<navbar />

		<main class="wrap main-container" id="home">
			<landing-section />

			<about-contents />

			<how-works />

			<kollo-box-section />
		</main>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import LandingSection from "~/components/Home/LandingSection.vue";
import HowWorks from "~/components/Home/HowWorks.vue";
import KolloBoxSection from "~/components/KolloBoxSection.vue";
import AboutContents from "~/components/Home/AboutContents.vue";
export default {
	components: {
		Navbar,
		LandingSection,
		HowWorks,
		KolloBoxSection,
		AboutContents,
	},
	name: "Home",
};
</script>


<style lang="scss" scoped>
</style>