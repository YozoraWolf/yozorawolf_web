<template>
    <div v-if="sModal" class="container" :class="modal_toggle ? 'showModal' : 'hideModal'">
        <div class="bg" @click="hideModal"></div>
          <div class="modal">
                
            <div class="header">
                <img class="flag" :src="'https://flagcdn.com/h60/'+ mapItem.id+'.png'">
                <span class="head">{{mapItem.name}}</span>
            </div>

            <div class="text">
                <div class="title_head" v-if="`${mapItem.titles.length}` > 0">Titles</div>
                <ul class="titles" v-if="`${mapItem.titles.length}` > 0">
                    <li class="title" :key="title.id" v-for="title in mapItem.titles">{{title}}</li>
                </ul>

                <div class="award_head" v-if="`${mapItem.awards.length}` > 0">Awards</div>
                <ul class="awards" v-if="`${mapItem.awards.length}` > 0">
                    <li class="award" :key="award.id" v-for="award in mapItem.awards">{{award}}</li>
                </ul>

                <div class="part_head" v-if="`${mapItem.participations.length}` > 0">Participations
                </div>
                <ul class="parts" v-if="`${mapItem.participations.length}` > 0">
                    <li class="part" :key="part.id" v-for="part in mapItem.participations">{{part}}</li>
                </ul>
            </div>

           
        </div>

    </div>

</template>

<script>
export default {
    name: "MapModal",
    props: {
        mapItem: {
            type: Object,
            default: () => ({"id": "us", "name":"United States","period":"","desc": "","titles": [],"awards": [], "participations": []})
        }
    },
    data() {
        //console.log(this.mapItem);
        return {
            sModal: false,
            modal_toggle: false,
            mapI: this.mapItem
        };
    },
    methods: {
        showModal(item) {
            console.log("Item Name: ", item.name);
            //console.log(this.$refs.cont);
            //this.mapItem = item;
        },
        hideModal() {
            this.modal_toggle = false;
            setTimeout(() => {this.sModal = false;}, 900);
        },
        getMapItem() {
            return this.mapItem;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./../../vars.scss";
    .container {

        .bg {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,.5);
        }

        .modal {
            position: fixed;
            z-index: 1;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);

            width: 50%;
            height: auto;
            min-height: 200px;

            background-color: $secondary-color;

            border-radius: 40px;
            box-shadow: 1px 1px 6px 1px black;

            .header {
                position: relative;

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                height: 60px;
                padding-top: 50px;
                padding-bottom: 55px;

                background-color: $primary-color;
                
                .flag {
                    width: 64px;
                    height: 64px;
                    text-align: center;
                }

                .head {
                    font-family: $ffamily;
                    font-size: 30px;
                    font-weight: bold;
                    color: white;

                }
            }

            .text {
                margin: 10px;
                margin-left: 30px;
                margin-right: 30px;
                margin-bottom: 30px;

                .title_head, .award_head, .part_head {
                    font-family: $ffamily;
                    font-size: 30px;
                    font-weight: bold;
                    font-style: italic;

                    margin-top: 15px;
                    margin-bottom: 15px;
                }

                .titles, .awards, .parts {
                    margin-left: 25px;
                    .title, .award, .part {
                        font-family: $ffamily;
                    }
                }
            }
            
        }
    }

    @keyframes fade {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    @keyframes fadeOut {
        0% {opacity: 1;}
        100% {opacity: 0;}
    }

    .showModal {
        animation: fade 1s ease 0s forwards;
    }

    .hideModal {
        animation: fadeOut 1s ease 0s backwards;
    }

    // Resp
    @media screen and (max-width: 400px) {
        .modal {
            width: 300px !important;
            height: 80% !important;

            min-height: 100px;
            max-height: 80%;
            
            .text {
                overflow-y: scroll;
                height: 100% !important;

                min-height: 100px;
                max-height: 72%;
            }
        }
    }
</style>