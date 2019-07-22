<template>
  	<v-app id="sandbox" :dark="dark">
		<router-view></router-view>
  	</v-app>
</template>

<script>
import { TOOLBAR_EVENT_BUS } from './components/toolbar/js/ToolbarEventBus'

  export default {
    data: () => ({
		dark: true,
	}),
	methods: {
		changeAppTheme(){
			TOOLBAR_EVENT_BUS.$off('changeAppTheme');
			TOOLBAR_EVENT_BUS.$on('changeAppTheme', (data) => {
				this.dark = data;
			});
		}
	},
	created(){
		this.changeAppTheme();
	}
  }
</script>