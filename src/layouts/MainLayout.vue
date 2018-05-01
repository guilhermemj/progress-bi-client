<template>
	<div id="app" :class="['wrapper', pageClass]">
		<Appbar />
		<Sidebar />

		<div class="content-wrapper">
			<section class="content-header" v-if="showPageHeader">
				<h1>
					{{pageTitle}}
					<small>{{pageDescription}}</small>
				</h1>
			</section>

			<section class="content container-fluid">
				<slot />
			</section>
		</div>

		<Controlbar />
		<AppFooter />
	</div>
</template>

<script>
import Appbar     from '@/components/layout/Appbar';
import Sidebar    from '@/components/layout/Sidebar';
import Controlbar from '@/components/layout/Controlbar';
import AppFooter  from '@/components/layout/Footer';

export default {
	name: 'MainLayout',

	props: [
		'pageClass',
		'pageTitle',
		'pageDescription',
	],

	components: {
		Appbar,
		Sidebar,
		Controlbar,
		AppFooter,
	},

	computed: {
		showPageHeader() {
			return !!this.pageTitle || !!this.pageDescription;
		},
	},

	// Resize window to adjust AdminLTE layout
	mounted() {
		this.$nextTick(() => window.jQuery(window).trigger('resize'));
	},
};
</script>
