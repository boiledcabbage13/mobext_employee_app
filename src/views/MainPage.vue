<template>
    <v-layout>
        <main-toolbar></main-toolbar>
            <v-content class="main-page">
                <v-container fluid>
                    <router-view></router-view>
                </v-container>
            </v-content>
        <mobext-footer></mobext-footer>
    </v-layout>
</template>

<script>
import NewsFeedCard from '../components/news_feed/NewsFeedCard';
import MainToolbar from '../components/toolbar/MainToolbar';
import MobextFooter from '../components/footer/MobextFooter';

  export default {
	components:{
		NewsFeedCard,
		MainToolbar,
		MobextFooter
	},
    data: () => ({
		dark: true,
	})
  }
</script>

<style lang="scss" scoped>
    .main-page{
        background-color: #c9c9c9;
    }
</style>
