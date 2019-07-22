<template>
    <v-toolbar app flat>
        <v-toolbar-side-icon
            @click.stop="toggleNavigationDrawer(showDrawer)"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title @click="GLOBAL_MIXINS_GO_TO_PAGE('/')">{{ appTitle }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <main-toolbar-options></main-toolbar-options>
    </v-toolbar>
</template>
<script>
import MainToolbarOptions from './MainToolbarOptions'

import { TOOLBAR_EVENT_BUS } from '../js/ToolbarEventBus'

export default {
    components: {
        MainToolbarOptions
    },
    data : () => ({
        appTitle : 'Test Apps',
        showDrawer: false
    }),
    methods : {
        async toggleNavigationDrawer(value){
            //this method is for toggling navigation drawer
            this.showDrawer = await !value;
            await TOOLBAR_EVENT_BUS.$emit('showNavDrawer',!value);

            //this code is use to avoid double clicking to the side bar icon 
            //to toggle the navigation drawer
            this.showDrawer = await value;
        }
    }
}
</script>
