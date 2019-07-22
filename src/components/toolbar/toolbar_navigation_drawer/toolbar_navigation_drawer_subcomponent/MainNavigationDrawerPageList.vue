<template>
    <v-layout column>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Profile & Rewards
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list dense class="pt-0">
            <v-divider></v-divider>
            <v-list-tile
                v-for="item in pageList"
                :key="item.title"
                @click="GLOBAL_MIXINS_GO_TO_PAGE(item.url)"
            >
                <v-list-tile-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-layout>
</template>
<script>
export default {
    data : () => ({
        pageList: [
            { title: 'Home', icon: 'home', url: '/'},
			{ title: 'View Profile', icon: 'account_box', url: '/profile' },
            { title: 'Rewards', icon: 'priority_high', url:'/rewards' },
            { title: 'Search', icon: 'search', url:'/search' },
            { title: 'Log Out', icon: 'power_settings_new', url:'/login' },
		]
    })
}
</script>
