<template>
  	<v-app id="sandbox" :dark="dark">
		<main-toolbar></main-toolbar>
		<v-content>
			<v-container fluid>
				<router-view></router-view>
				<!-- <news-feed-card></news-feed-card>
				<news-feed-card></news-feed-card> -->
			</v-container>
		</v-content>
		<mobext-footer></mobext-footer>
  	</v-app>
</template>

<script>
import NewsFeedCard from './components/news_feed/NewsFeedCard';
import MainToolbar from './components/toolbar/MainToolbar';
import MobextFooter from './components/footer/MobextFooter';

import { TOOLBAR_EVENT_BUS } from './components/toolbar/js/ToolbarEventBus'

  export default {
	components:{
		NewsFeedCard,
		MainToolbar,
		MobextFooter
	},
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