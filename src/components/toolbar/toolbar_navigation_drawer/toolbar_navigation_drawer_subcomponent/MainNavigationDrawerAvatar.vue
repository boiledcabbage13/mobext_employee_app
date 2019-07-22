<template>
    <v-toolbar flat class="transparent my-2">
        <v-list class="pa-0">
            <v-list-tile avatar size="100">
                <v-list-tile-avatar>
                    <img :src="imageSource">
                </v-list-tile-avatar>
                <v-list-tile-content>
                    <v-list-tile-title>{{ avatarName }}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-toolbar>
</template>
<script>
export default {
    data : () => ({

    }),
    props : {
        imageSource : {
            type : String,
            default : 'https://randomuser.me/api/portraits/men/85.jpg'
        },
        avatarName : {
            type : String,
            default : 'John Leider'
        }
    }
}
</script>
