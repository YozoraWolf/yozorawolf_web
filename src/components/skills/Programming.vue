<template>

  <div class="prog_container">
      
      <div class="prog" :key="prog.id" v-for="prog in programming">
            <radial-progress-bar :diameter="100"
                       :completed-steps="prog.proficiency"
                       :total-steps="100"
                       :startColor="'#0e6bc2'"
                       :stopColor="'#0e6bc2'"
                       :innerStrokeColor="'#DADADA'">
                       <i :class="getIcon(prog.id)"></i>
            </radial-progress-bar>
            <span class="prog_p">{{prog.proficiency}}%</span>
            <span class="prog_t">{{prog.name}}</span> 
      </div>
  </div>
</template>

<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
    name: "Programming",
    props: {
        programming: Array
    },
    methods: {
        getIcon(icon) {
            switch(icon) {
                case "azure":
                case "json":
                case "xml":
                    return 'devicon-devicon-plain';
                case "raspberrypi":
                    return 'devicon-'+icon+'-line';
                default:
                    return 'devicon-'+icon+'-plain';
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

.prog_container {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .prog {
        width: 80px;
        height: 80px;
        
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin: 65px;
        margin-right: 35px;
        margin-left: 30px;

        .prog_t {
            text-align: center;
            font-family: $ffamily;
            font-weight: bold;
        }

        .prog_p {
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