<template>
	
	<div>
		<h1 class="m_title">Map</h1>
		<div class="map_cont">
			<svg-map class="map" location-class="loc" :map="World" 
			@click="selLoc" />


		</div>
		
		<MapModal :mapItem="mapItem" ref="mapmodal" />
		
	</div>
	

</template>

<script>
import { SvgMap } from "vue-svg-map";
import World from "@svg-maps/world.capitals";
import MapModal from "./modals/MapModal.vue";
import mapD from "./../assets/data/map.json";

export default {
	name: "Map",
	components: {
		SvgMap,
		MapModal
	},
	data() {
		return {
			World,
			mapData: mapD,
			mapItem: Object.assign({"id": "us", "name":"United States","period":"","desc": "","titles": [""],"awards": [""], "participations": []})
		}
	},
	methods: {
		showMapInfo(code) {
			console.log("Code: ",code);
			this.$refs.mapmodal.sModal = true;
			this.$refs.mapmodal.modal_toggle = true;
		},
		selLoc(event) {
			switch(event.target.id.toUpperCase())
			{
				case "VE":
				case "US":
				case "FR":
				case "JP":
					this.showMapInfo(event.target.id.toUpperCase());
					this.mapItem = this.mapData[event.target.id.toUpperCase()];
					//console.log("ITEM: ", this.mapItem);
					//console.log("ITEMS: ", this.mapData);
					this.$refs.mapmodal.showModal(this.mapItem);
					break;
				default:
					break;
			}
		}
	}
};
</script>

<style src="vue-svg-map/dist/index.css"></style>
<style lang="scss">
@import "./../vars.scss";

	.m_title {
		font-family: $ffamily;
		font-size: $h1_size;
		margin: 20px;

		display: flex;
		align-self: center;
		justify-content: center;
	}

	.map_cont {
		margin: 5%;

		path[id="ve"],path[id="us"],path[id="jp"],path[id="fr"]
		{
			fill: $primary-color;

			&:hover {
				fill: $primary-color;
				filter: brightness(120%);
			}
		}

		path {
			fill: $secondary-color;


			
			&:hover {
				fill: $secondary-color;
				filter: brightness(85%);
			}
		}
	}

</style>