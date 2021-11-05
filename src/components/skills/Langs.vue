<template>

  <div class="lang_container">
      
      <div class="lang" :key="lang.id" v-for="lang in langs">
            <radial-progress-bar :diameter="100"
                       :completed-steps="lang.proficiency"
                       :total-steps="100"
                       :startColor="'#0e6bc2'"
                       :stopColor="'#0e6bc2'"
                       :innerStrokeColor="'#DADADA'">
            <img :src="'https://flagcdn.com/h60/'+lang.country+'.png'"
            v-tooltip="showCerts(lang.certs)"
            >
            </radial-progress-bar>
            <span class="lang_p">{{lang.proficiency}}%</span>
            <span class="lang_t">{{lang.name}}</span> 
      </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
    name: "Langs",
    props: {
        langs: Array
    },
    methods: {
        showCerts(certs) {
            if(certs.length > 0) {
                return certs[0];
            }
        }
    },
    components: {
        RadialProgressBar
    }
}
</script>

<style lang="scss">
@import "./../../vars.scss";
@import url("https://cdn.jsdelivr.net/gh/devicons/devicon@v2.13.0/devicon.min.css"); 


    .tooltip {
        display: block !important;
        z-index: 10000;   

    .tooltip-inner {
        background: black;
        color: white;
        font-family: $ffamily;
        border-radius: 16px;
        padding: 5px 10px 4px;  
    }

    .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }

    &[x-placement^="top"] {
        margin-bottom: 5px;

        .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
        }
    }

    &[x-placement^="bottom"] {
        margin-top: 5px;

        .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
        }
    }

    &[x-placement^="right"] {
        margin-left: 5px;

        .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
        }
    }

    &[x-placement^="left"] {
        margin-right: 5px;

        .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
        }
    }

    &.popover {
        $color: #f9f9f9;

        .popover-inner {
        background: $color;
        color: black;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(black, .1);
        }

        .popover-arrow {
        border-color: $color;
        }
    }

    &[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    &[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }
    }

.lang_container {



    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .lang {
        width: 80px;
        height: 80px;
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 65px;
        margin-right: 35px;
        margin-left: 30px;

        img {
            width:50px;
            box-shadow: 0px 0px 3px 1px black;
        }

        .lang_t {
            text-align: center;
            font-family: $ffamily;
            font-weight: bold;
        }

        .lang_p {
            text-align: center;
            font-family: $ffamily;
        }

        i {
            font-size: 40px;
            color: $text-color;
        }

    }
}

</style>