<template>
  <div class="pt-3 p-0">
    <b-btn-group v-for="name in namelist" v-bind:key="name.name" class="d-flex flex-row w-100 mb-1">
      <b-button v-if="currentlist === name.id" variant="outline-dark" disabled>{{name.name}}</b-button>
      <b-button v-else v-on:click="setCurrentList(name.id)">{{name.name}}</b-button>
      <b-button style="max-width: 25%">
        <b-icon-three-dots></b-icon-three-dots>
      </b-button>
    </b-btn-group>

    <b-button v-on:click="createNewList" class="w-100" style="max-height: 4%">
      <b-icon-plus></b-icon-plus>
    </b-button>
  </div>
</template>

<script>
export default {
name: "MenuList",
  props: ['currentlist', 'namelist'],
  data: function (){
    return{

    }
  },

  methods: {
    setCurrentList: function (newcurrentlist){ //Ne pas oublier de mettre le " v-on:click="setCurrentList" " dans les boutons des listes
      this.$emit("set-current-list", newcurrentlist);
    },

    createNewList: function (){
      this.$prompt("Nom de la liste").then((name) => {
        this.$emit("create-new-list", name)
      });



    }
  }
}
</script>

<style scoped>

</style>