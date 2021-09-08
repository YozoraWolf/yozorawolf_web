<template>
    <div class="header">
        <font-awesome-icon class="icon" :icon="['fab', 'wolf-pack-battalion']" /> 
        <div class="title">YozoraWolf</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            appTitle: 'YokazeWolf Website',
            drawer: false,
            items: [
                { title: 'About Me' },
                { title: 'My Skills' },
                { title: 'Projects' }
            ]
        };
    }
};
</script>

<style lang="scss">
  @import './../vars.scss';
    .header {
        position: fixed;
        width: 100%;
        height: 60px;
        background-color: $primary-color;
        display: flex;
        z-index: 100;

        box-shadow: .4px .4px 8px 0px black;

        .icon {
            justify-self: center;
            align-self: center;
            color: white;

            text-shadow: 1px 1px 3px black;

            width: 50px;
            height: 80%;

            margin-left: 10px;
        }

        .title {
            width:200px;

            justify-self: center;
            align-self: center;
            color: white;
            font-size: 20px;
            font-family: $ffamily;
            font-weight: bold;

            margin: 12px;
            margin-left: 5px;
        }
    }
</style>