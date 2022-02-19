<template>
	<header id="nav-header" class="py-1 px-3 p-md-0">
		<b-container class="h-100 px-0">
			<div class="inner d-flex flex-grow-1 h-100">
				<b-navbar class="flex-grow-1" toggleable="lg" type="light">
					<nuxt-link to="/" class="navbar-brand">
						 <img
							src="~/assets/logo-t.png"
							alt="Kollobox"
							style="width: 165px"
						/>
					</nuxt-link>
					<div class="d-flex align-items-center">
						<b-navbar-toggle target="nav-collapse" clas>
							<fa
								:icon="['fas', 'bars']"
								style="font-size: 26px; color: #fff"
								class=""
								size="2x"
							/>
						</b-navbar-toggle>
					</div>

					<b-collapse id="nav-collapse" is-nav class="justify-content-end">
						<b-navbar-nav>
							<br />
							<li class="nav-item d-flex align-items-center">
								<nuxt-link target="_self" to="/affiliates" class="mb-0">
									About Us
								</nuxt-link>
							</li>
							<li class="nav-item d-flex align-items-center">
								<a
									target="_self"
									href="#"
									class="mb-0"
								>
									Lorem
								</a>
							</li>
							<li class="nav-item d-flex align-items-center">
								<nuxt-link target="_self" to="/about" class="mb-0">
									SUPPORT
								</nuxt-link>
							</li>
							<li class="nav-item d-flex align-items-center">
								<a target="_self" href="#" class="mb-0"> FAQS </a>
							</li>
							<li class="bw-auto-seperator ms-dsk p-0"></li>
							<li
								class="nav-item ms-dsk d-flex align-items-center"
								v-if="!false"
							>
								<nuxt-link
									target="_self"
									to="/login"
									class="mb-0 btn btn-primary"
								>
									LOGIN
								</nuxt-link>
							</li>
						</b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
		</b-container>
	</header>
</template>

<script>
export default {
	mounted() {
		window.addEventListener("scroll", () => {
			let header = document.getElementById("nav-header");
			let windowPosition = window.scrollY > 0;
			header.classList.toggle("detatched", windowPosition);
		});
	},
};
</script>

<style lang="scss" scoped>
.navbar {
	// padding: 0.5rem 1rem;
	padding-top: 0.3rem !important;
	padding-bottom: 0.3rem !important;
}

.navbar-toggler {
	padding: 0.25rem 0.75rem;
	font-size: 1.25rem;
	line-height: 1;
	background-color: transparent;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	border-radius: 50%;
	background-color: #ed1c24;
	height: 48px;
	width: 49px;
}

ul.navbar-nav {
	li {
		position: relative;
		z-index: 9;
		> a {
			font-size: 16px;
			font-weight: 500;
			transition: background-color 0.4s;
			border-radius: 8px;
			padding: 10px;
			margin: 0 0 10px;
			line-height: 21px;
			display: block;
			color: var(--color-white);
			position: relative;

			&::after {
				content: "";
				border-radius: 8px;
				background-color: rgba(255, 255, 255, 0.36);
				position: absolute;
				right: 0;
				top: 0;
				left: 0;
				bottom: 0;
				pointer-events: none;
				opacity: 0;
				cursor: pointer;
				transition: opacity 0.1s cubic-bezier(0, 0, 1, 1);
			}
			&:hover {
				color: var(--color-primary);

				&::after {
					// opacity: 1;
				}
			}
		}
	}
}

#nav-header {
	position: fixed;
	display: flex;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	background: var(--color-orange);
	box-shadow: none;
	z-index: 99;
	transition: all 0.4s;

	&.detatched {
		background: var(--color-white) !important;
		box-shadow: 0 4px 13px rgba(78, 64, 64, 0.05) !important;

		ul.navbar-nav {
			li > a {
				color: var(--color-black-2);
			}
		}
	}
}
</style>