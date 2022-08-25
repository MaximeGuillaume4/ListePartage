<template>
  <div class="h-10">
    <b-btn-group v-for="item in sheet" v-bind:key="item.id" class="h-75 mt-2">
      <b-button v-if="currentsheet === item.id" variant="outline-dark" disabled class="h-100 mr-1">{{item.name}}</b-button>
      <b-button v-else v-on:click="setCurrentSheet(item.id)" class="h-100 mr-1">{{item.name}}</b-button>
    </b-btn-group>

    <b-button v-on:click="createNewSheet" class="h-75 mt-2">
      <b-icon-plus></b-icon-plus>
    </b-button>
  </div>
</template>

<script>
export default {
  name: "BoardMenu",
  props:['sheet', 'currentsheet'],

  methods:{
    setCurrentSheet: function (newcurrentsheet){
      this.$emit("set-current-sheet", newcurrentsheet);
    },

    createNewSheet: function (){
      this.$prompt("Nom de la feuille").then((name) => {
        this.$emit("create-new-sheet", name)
      });
    }

  }

}
</script>

<style scoped>
  .h-10{
    height: 10%;
  }
</style>