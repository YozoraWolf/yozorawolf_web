<template>
    <div>
        <span></span>
        <div class="welcome_pic">
            <div class="fade"></div>
            <h1 class="welcome_title">Welcome to my Website!</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Welcome"
}
</script>

<style lang="scss">
  @import './../vars.scss';

    .welcome_pic {
        width: 100%;
        height:500px;

        background: linear-gradient(to right, black 0%, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0) 90%, black 100%), url('./../assets/bgs/main6.jpg') no-repeat;
        background-color: black;
        background-size: 70% 100%;
        background-position: center;


    
        display: flex;
        justify-content: center;
        .welcome_title {
            justify-self: center;
            align-self: center;
            color: white;
            font-family: $ffamily;
            font-size: 80px;
            font-weight: 100;

            text-align: center;

            text-shadow: 0px 0px 4px white;
        }
    }
</style>