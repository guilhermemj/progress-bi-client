<template>
	<aside class="main-sidebar">
		<section class="sidebar">
			<ul class="sidebar-menu" data-widget="tree">
				<!-- <li class="header">HEADER</li> -->

				<NavItem
					v-for="(menuItem, index) of menuItems"
					:key="`nav-item-${index}`"
					:menuItem="menuItem"
				/>
			</ul>
		</section>
	</aside>
</template>

<script>
import NavItem   from '@/components/layout/Sidebar/NavItem';
import menuItems from '@/components/layout/Sidebar/menuItems';

export default {
	name: 'Sidebar',

	data() {
		return {
			menuItems,
		};
	},

	components: {
		NavItem,
	},
};
</script>

<style>

</style>
