<template>
	<li :class="['treeview', menuItem.classes]">
		<a href="javascript:void(0)">
			<FontAwesomeIcon v-if="menuItem.icon" :icon="menuItem.icon" fixed-width />
			<span>{{menuItem.text}}</span>

			<span class="pull-right-container">
				<!-- TODO: entender porque os dois são necessários pro estilo funcionar -->
				<FontAwesomeIcon icon="angle-left" class="pull-right" />
				<i class="fa fa-angle-left pull-right"></i>
			</span>
		</a>

		<ul class="treeview-menu">
			<NavItem
				v-for="(submenuItem, index) of menuItem.submenu"
				:key="`subnav-item-${index}`"
				:menuItem="submenuItem"
			/>
		</ul>
	</li>
</template>

<script>
export default {
	name: 'NavNode',

	props: [
		'menuItem',
	],

	// Circular components must be called this way as seen in
	// https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
	beforeCreate() {
		/* eslint-disable global-require */
		this.$options.components.NavItem = require('./NavItem.vue').default;
	},
};
</script>
