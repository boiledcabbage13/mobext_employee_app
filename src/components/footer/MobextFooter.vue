<template>
    <v-footer app>
        <span class="px-3">&copy; {{ footer }} | {{ date }}</span>
    </v-footer>
</template>
<script>
export default {
    data : () => ({
        footer : 'Test App',
        date : new Date().getFullYear()
    })
}
</script>
