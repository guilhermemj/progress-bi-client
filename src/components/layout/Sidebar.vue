<template>
	<aside class="main-sidebar">
		<section class="sidebar">
			<ul class="sidebar-menu" ref="sidebarTreeview">
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
import NavItem from '@/components/layout/Sidebar/NavItem';
import menuItems from '@/components/layout/Sidebar/menuItems';

export default {
	name: 'Sidebar',

	components: {
		NavItem,
	},

	data() {
		return {
			menuItems,
		};
	},

	mounted() {
		// Apply AdminLTE tree plugin
		window.jQuery(this.$refs.sidebarTreeview).tree();
	},
};
</script>
