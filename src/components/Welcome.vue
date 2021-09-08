<template>
    <div>
        <span></span>
        <div class="welcome_pic" :style="{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url('+welcome+')' }">
            <div class="fade"></div>
            <h1 class="welcome_title">Welcome to my Website!</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Welcome",
    data() {
        return {
            welcome: require("./../assets/bgs/main4.png")
        }
    }
}
</script>

<style lang="scss">
  @import './../vars.scss';

    .welcome_pic {
        width: 100%;
        height:500px;

        background-size: 100% 100%;
        background-position: center;

    
        display: flex;
        justify-content: center;
        .welcome_title {
            justify-self: center;
            align-self: center;
            color: white;
            font-family: $ffamily;
            font-size: 40px;

            text-shadow: 0px 0px 4px white;
        }
    }
</style>