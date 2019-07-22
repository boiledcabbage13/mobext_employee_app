<template>
    <v-navigation-drawer
        v-model="showDrawer"
        temporary
        overflow
        clipped
        app
    >
        <main-navigation-drawer-avatar></main-navigation-drawer-avatar>
        <main-navigation-drawer-page-list></main-navigation-drawer-page-list>
        <main-navigation-drawer-other-settings></main-navigation-drawer-other-settings>
    </v-navigation-drawer>
</template>
<script>
import MainNavigationDrawerAvatar from './toolbar_navigation_drawer_subcomponent/MainNavigationDrawerAvatar';
import MainNavigationDrawerOtherSettings from './toolbar_navigation_drawer_subcomponent/MainNavigationDrawerOtherSettings';
import MainNavigationDrawerPageList from './toolbar_navigation_drawer_subcomponent/MainNavigationDrawerPageList';

import { TOOLBAR_EVENT_BUS } from '../js/ToolbarEventBus';

export default {
    components : {
        MainNavigationDrawerAvatar,
        MainNavigationDrawerOtherSettings,
        MainNavigationDrawerPageList
    },
    data: () => ({
		showDrawer : false,
    }),
    methods: {
        showNavigationDrawer(){
            TOOLBAR_EVENT_BUS.$off('showNavDrawer');
            TOOLBAR_EVENT_BUS.$on('showNavDrawer', (data) => {
                this.showDrawer = data;
            });
        }
    },
    created(){
        this.showNavigationDrawer();
    }
}
</script>
