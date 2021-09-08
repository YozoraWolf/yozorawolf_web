<template>
    <div class="s_container">
        <h1 class="s_title">Skills</h1>
        <Programming :programming="getProgrammingLangs()"/>
        <h1 class="s_title">Languages</h1>
        <Langs :langs="getLangs()"/>
    </div>
</template>

<script>
import Programming from "./skills/Programming.vue";
import Langs from "./skills/Langs.vue";

export default {
    name: "Skills",
    data() {
        return {};
    },
    components: {
        Programming,
        Langs
    },
    methods: {
        getProgrammingLangs() {
            return require("../assets/data/programming.json");
        },
        getLangs() {
            return require("../assets/data/langs.json");
        }
    }
}
</script>

<style lang="scss">

@import "./../vars.scss";

.s_title {
    text-align: center;
    font-family: $ffamily;
    margin-top: 40px;
}
</style>