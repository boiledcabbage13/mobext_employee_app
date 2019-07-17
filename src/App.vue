<template>
  	<v-app id="sandbox" :dark="dark">
		<v-navigation-drawer
			v-model="primaryDrawer.model"
			temporary
			
			overflow
			clipped
			app
		>
			<!-- <v-toolbar flat class="transparent">
				<v-list class="pa-0">
					<v-list-tile avatar size="100">
						<v-list-tile-avatar>
							<img src="https://randomuser.me/api/portraits/men/85.jpg">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>John Leider</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list>
			</v-toolbar> -->
			<v-layout align-center justify-center>
				<v-flex d-flex ma-2>
					<v-avatar size="100">
						<img src="https://randomuser.me/api/portraits/men/85.jpg">
					</v-avatar>
				</v-flex>
			</v-layout>
			<v-layout align-center justify-center>
				John Leider
			</v-layout>

			<v-list dense class="pt-0">
				<v-divider></v-divider>
				<v-list-tile
					v-for="item in items"
					:key="item.title"
				>
					<v-list-tile-action>
					<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>

					<v-list-tile-content>
					<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar app>
			<v-toolbar-side-icon
				@click.stop="primaryDrawer.model = !primaryDrawer.model"
			>
			</v-toolbar-side-icon>
			<v-toolbar-title>Mobext Employee App</v-toolbar-title>
		</v-toolbar>
		<v-content>
			<v-container fluid>
				<news-feed-card></news-feed-card>
				<news-feed-card></news-feed-card>
			</v-container>
		</v-content>
		<v-footer app>
			<span class="px-3">&copy; Mobext Employee App | {{ new Date().getFullYear() }}</span>
		</v-footer>
  	</v-app>
</template>

<script>
import NewsFeedCard from './components/news_feed/NewsFeedCard';
  export default {
	components:{
		NewsFeedCard
	},
    data: () => ({
		dark: true,
		drawers: ['Default (no property)', 'Permanent', 'Temporary'],
		primaryDrawer: {
			model: null,
			type: 'default (no property)',
			clipped: false,
			floating: false,
			mini: false
		},
		footer: {
			inset: false
		},
		items: [
			{ title: 'View Profile', icon: 'account_box' },
			{ title: 'Rewards', icon: 'priority_high' },
		],
		right: null
    })
  }
</script>