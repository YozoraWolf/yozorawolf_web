<template>

    <div class="proj_container">
    <h1 class="proj_title">Projects</h1>
    <div class="projs">
        <div :key="proj.id" class="proj" v-for="proj in projects">
            
            <div class="proj_rect" :style="{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.5) 100%), url('+getProjLogo(proj.logo_url)+')' }">

            <div @click="toggleHide($event)" class="title show">
                <span class="proj_t show">
                    {{proj.title}}
                </span>
            </div>
            <div class="info hidden" @click="toggleHide($event)" style.display="none">
                <span class="proj_t hidden" style.display="none">
                    {{proj.title}}
                </span>
                <span class="proj_desc hidden" style.display="none">
                    {{proj.desc}}
                </span>
            </div>
                

            </div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    name: "Projects",
    props: {
        projects: Array
    },
    methods: {
        getProjLogo(logo) {
            //console.log(logo);
            return require("./../assets/bgs/"+logo);
        },
        toggleHide(event) {
            //console.log(event.target.classList);
            if(["proj_t", "proj_desc"].indexOf(event.target.classList)) {
 
                let info = [].slice.call(event.target.parentNode.parentNode.children).filter((c) => c.classList.contains("info"))[0];
                let title = [].slice.call(event.target.parentNode.parentNode.children).filter((c) => c.classList.contains("title"))[0];

                if(event.target.parentNode.classList.contains("info"))
                    this.showTitle(info, title);
                else if(event.target.parentNode.classList.contains("title")) {
                    this.showInfo(info, title);
                }
            }
            
            
            

        },
        showTitle(info, title) {
            info.classList.toggle("hidden");
            info.classList.toggle("show");
            for(let node of info.children) {
                node.classList.toggle("hidden");
                node.classList.toggle("show");

            }

            title.classList.toggle("hidden");
            title.classList.toggle("show");
            for(let node of title.children) {
                node.classList.toggle("hidden");
                node.classList.toggle("show");
            }
            


        },
        showInfo(info, title) {
            title.classList.toggle("hidden");
            title.classList.toggle("show");
            for(let node of title.children) {
                node.classList.toggle("hidden");
                node.classList.toggle("show");

            }

            info.classList.toggle('hidden');
            info.classList.toggle('show');
            for(let node of info.children) {
                node.classList.toggle("hidden");
                node.classList.toggle("show");
            }

            

        }
    }

}
</script>

<style lang="scss">
    @import "./../vars.scss";
    
    .proj_container {
        background-color: $primary-color;

     

        width: 100%;

        .projs {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;    
        }

        .proj_title {
            text-align: center;
            font-family: $ffamily;
            margin-top: 20px;
            padding-top: 20px;
            padding-bottom: 30px;

            color: white;
        }

        padding-bottom: 35px;
    }

    .proj {




        .proj_rect {
            box-shadow: 0px 0px 5px 1px black;
            
            margin: 15px;
            width: 500px;
            height: 500px;

            max-width: 600px;

            border-radius: 3%;

            display: flex;
            justify-content: center;
            align-items: center;

            background-size: 100% 100%;

            .title {
                cursor: pointer;
                .proj_t {

                    user-select: none;

                    color: white;
                    font-family: $ffamily;
                    font-weight: bold;
                    font-size: 40px;

                    text-shadow: 1px 1px 3px black;
                }
            }

            .info {

                cursor: pointer;

                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;


                .proj_t {

                    user-select: none;

                    color: white;
                    font-family: $ffamily;
                    font-weight: bold;
                    font-size: 30px;

                    text-shadow: 1px 1px 3px black;
                }

                .proj_desc {
                    user-select: none;

                    color: white;
                    font-family: $ffamily;
                    font-weight: normal;
                    font-size: 20px;

                    margin-left: 4%;
                    margin-right: 4%;

                    text-shadow: 1px 1px 3px black;
                }
            }



        }
    }

    @keyframes fade {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    .hidden {
        display: none;
        animation: fade 2s ease 0s forwards;
    }

    .show {
        display: flex;
        animation: fade 2s ease 0s backwards;
    }

    @media screen and (max-width: 400px) {
        
        .proj_rect {
            width: 300px !important;
            height: 300px !important;
            overflow-y: auto;

            display:flex;
            align-items: center;
            justify-content: center;

            .title {
                text-align: center;
            }

            .info {
                margin-top: 50%;
                height: 100%;


            }
        }

    }

    
</style>