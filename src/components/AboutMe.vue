<template>
    <div class="container">
        <svg class="user_i"></svg>
        <h1 class="am_title">About Me</h1>
        <p class="am_desc">My name is Frank, I'm a full time programmer. I dedicate myself to frontend/backend development. I've been programming since I was 13 years old, with a huge passion with scripting on small servers. I've done small and big projects in which I've put my full potential to learn new technologies and techniques to apply to my day-to-day habits. My goal is to achieve excellence and optimize my work as much as I can.</p>

        <p class="am_desc">8 Years of experience in the Programming and Scripting field. I'm focused in the development of Android and Windows based applications using Java, C# (ASP.NET) and C++. I'm also able to develop Web pages using HTML, CSS and jQuery to ensure quality, balanced interactions and aesthetics. I use or create the adequate tools and utilities when it comes to programming major projects to ensure effectiveness and tidiness in my coding.</p>

        <p class="am_desc">When I'm not developing major applications, I normally dedicate myself to developing small scripts and applications for personal and testing purposes. Some of these small projects range from python scripts to GUI applications with basic interactions.</p>

        <p class="am_desc">As of lately, I've been programming and testing a lot of backend systems for Java and Javascript, which has opened new doors in my passion for programming. In addition, I've also been testing and trying out different known API's and SDK's (Facebook, YouTube, Twitter, Google, etc..) to get accustomed to possible future embeddings in my applications.</p>

        <p class="am_desc">Although my interests are mainly based on programming and electronics, I also dedicate some of my time to translation. I can speak Spanish, English, French, Chinese and Japanese. These linguistic tools have not only allowed me to create localization systems in my applications, but also allowed me to subtitle and translate many works from my favorite series. One of my biggest contributions was to translate the Multiplayer Modification for GTA San Andreas, Multi Theft Auto to Spanish and Japanese.</p>

        <p class="am_desc">In my free time I dedicate myself to listening to music, watching videos, strolling, cooking, gaming, and admin on forums. However, most of the time, I'll find myself bug fixing and adding new code to my projects, as there is always time for improvement and development!</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import './../vars.scss';

    .container {
        width: 100%;
        height: auto;

        background-color: $secondary-color;

        display: flex;
        flex-direction: column;

        align-items: center;

        .user_i {
            background-image: url("../assets/user-solid.svg");
            background-size: 100% 100%;
            fill: $text-color;
            width: 50px;
            height: 50px;
            margin-top: 20px;
        }

        .am_title, .am_desc {
            font-family: $ffamily;
        }

        .am_title {
            color: $text-color;
            font-size: 30px;
            margin: 15px;
        }

        .am_desc {
            margin-left: 35px;
            margin-right: 35px;

            margin-top: 25px;

            text-align: center;
        }
    }


</style>