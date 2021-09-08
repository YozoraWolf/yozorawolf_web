<template>
    <html lang="en" amp>
        <head>
        <title>YozoraWolf</title>
        ...
        </head>
        <div>
            <Header />
            <Welcome />
            <AboutMe />
            <Skills />
            <Projects :projects="getProjs()" />
            <Map />
            <MapModal />
            <Footer />
        </div>
    </html>
</template>

<script>
import Header from './components/Header.vue';
import Welcome from './components/Welcome.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Map from './components/Map.vue';
import MapModal from './components/modals/MapModal.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    metaInfo: {
      title: 'YozoraWolf'
    },
    components: {
        Header,
        Welcome,
        AboutMe,
        Skills,
        Projects,
        Map,
        MapModal,
        Footer
    },
    methods: {
        getProjs() {
            return require("./assets/data/projects.json");
        }
    }
};
</script>

<style lang="scss">

</style>