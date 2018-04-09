<template>
	<div id="app" class="wrapper">
		<Appbar />
		<Sidebar />

		<div class="content-wrapper">
			<section class="content-header">
				<h1>
					Page Header
					<small>Optional description</small>
				</h1>

				<ol class="breadcrumb">
					<li>
						<a href="#">
							<FontAwesomeIcon icon="tachometer-alt" />
							Level
						</a>
					</li>

					<li class="active">Here</li>
				</ol>
			</section>

			<section class="content container-fluid">
				<router-view />
			</section>
		</div>

		<Controlbar />
		<AppFooter />
	</div>
</template>

<script>
import '@/components/vendor';

// Child components
import Appbar     from '@/components/layout/Appbar';
import Sidebar    from '@/components/layout/Sidebar';
import Controlbar from '@/components/layout/Controlbar';
import AppFooter  from '@/components/layout/Footer';

export default {
	name: 'App',

	components: {
		Appbar,
		Sidebar,
		Controlbar,
		AppFooter,
	},
};
</script>
