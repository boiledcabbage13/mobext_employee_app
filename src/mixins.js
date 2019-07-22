import Vue from 'vue'

Vue.mixin({
    methods: {
        GLOBAL_MIXINS_GO_TO_PAGE(url){
            this.$router.push(url);
        }
    }
})