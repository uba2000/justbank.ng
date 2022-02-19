<template>
	<div>
		<Nuxt />
		<base-footer />
		<kollo-box-cookie-badge v-if="$store.getters.isCookieToggled" />
	</div>
</template>

<script>
import KolloBoxCookieBadge from "@/components/KolloBoxCookieBadge.vue";
import BaseFooter from '@/components/Base/BaseFooter.vue';
export default {
	components: {
		KolloBoxCookieBadge,
		BaseFooter,
	},
};
</script>

BaseFooter
<style lang="scss">
</style>
