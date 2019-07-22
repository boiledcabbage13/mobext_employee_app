<template>
    <v-layout>
        <main-navigation-drawer></main-navigation-drawer>
        <main-toolbar-title-and-options></main-toolbar-title-and-options>
    </v-layout>
</template>
<script>
import MainToolbarTitleAndOptions from './toolbar_subcomponent/MainToolbarTitleAndOptions'
import MainNavigationDrawer from './toolbar_navigation_drawer/MainNavigationDrawer';

export default {
    components: {
        MainToolbarTitleAndOptions,
        MainNavigationDrawer
    }
}
</script>
