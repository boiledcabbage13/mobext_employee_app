<template>
    <v-layout column>
        <news-feed-card></news-feed-card>
        <news-feed-card></news-feed-card>
    </v-layout>
</template>
<script>
import NewsFeedCard from '../../components/news_feed/NewsFeedCard'

export default {
    components : {
        NewsFeedCard
    }
}
</script>
