<template>
    <v-layout>
        <v-flex xs12 sm12 md12 lg12 my-2>
            <v-card>
                <v-img
                    :src="card.image"
                    aspect-ratio="2.75"
                    @click="readArticle"
                ></v-img>

                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">{{ card.title }}</h3>
                    <div> {{ card.description }} </div>
                </div>
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon @click="readArticle">
                        <v-icon>import_contacts</v-icon>
                    </v-btn>
                    <v-btn icon @click="shareArticle">
                        <v-icon>share</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>


<script>
    export default {
        data : () => ({
            card : {
                image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
                title: 'Kangaroo Valley Safari',
                description: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'

            }
        }),
        methods: {
            readArticle(){
                alert('readArticle')
            },
            shareArticle(){
                alert('shareArticle')
            },
        }
    }
</script>