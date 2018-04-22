<template>
	<div id="app" :class="['wrapper', pageClass]">
		<Appbar />
		<Sidebar />

		<div class="content-wrapper">
			<slot name="content-header" />

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

	props: ['pageClass'],

	components: {
		Appbar,
		Sidebar,
		Controlbar,
		AppFooter,
	},
};
</script>
