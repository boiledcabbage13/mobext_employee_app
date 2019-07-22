<template>
    <v-layout column>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Settings
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>
        <v-list dense class="pt-0">
            <v-divider></v-divider>
            <v-list-tile>
                <v-switch v-model="dark" primary label="Dark Theme" @change="changeAppTheme"></v-switch>
            </v-list-tile>
        </v-list>
    </v-layout>
</template>
<script>
import { TOOLBAR_EVENT_BUS } from '../../js/ToolbarEventBus';
export default {
    data : () => ({
        dark : true
    }),
    methods: {
        changeAppTheme(){
            TOOLBAR_EVENT_BUS.$emit('changeAppTheme',this.dark);
        }
    },
}
</script>
