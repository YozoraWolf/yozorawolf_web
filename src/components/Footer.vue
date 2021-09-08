<template>
    <div class="cont">
        <div class="section_one">
            <div class="contact_info">
                <b class="name">YozoraWolf</b>
                <i class="ps">Programming Specialist</i>
                <span class="contact">
                    <b>E-Mail:</b> yozorawolf@gmail.com
                </span>

              
            </div>
        </div>
        <div class="hr"></div>
        <div class="copy_cont">
            <span class="copyr">YozoraWolf © 2021</span>
        </div>
        <div class="empty"></div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "./../vars.scss";


    .cont {
        background-color: $primary-color;
        height: auto;

        .section_one {
            .contact_info {
                margin-left: 15px;
                display: flex;
                flex-direction: column;

                .name {
                    font-family: $ffamily;
                    font-size:25px;
                    color: $secondary-color;
                    margin-top: 10px;

                }

                .ps {
                    font-family: $ffamily;
                    font-size: 15px;
                    color: $secondary-color;

                    margin-top: -5px;


                }

                .contact {
                    font-family: $ffamily;
                    color: $secondary-color;
                    
                    margin-top: 5px;

                }
            }
        }

        .copy_cont {
            display: flex;

            justify-content: end;


            .copyr {
                font-family: $ffamily;
                font-style: italic;
                color: $secondary-color;
                margin-right: 10px;
            }
        }

        .empty {
            height: 5px;
        }
        
    }
</style>