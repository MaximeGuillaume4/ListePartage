<template>
  <div class="row h-100" style="">
      <MenuList style="background: linear-gradient(45deg, aliceblue,  90%, white)" class="col-md-2" v-bind:currentlist = currentlist v-bind:namelist="namelist" v-on:set-current-list="setCurrentList" v-on:create-new-list="createNewList"></MenuList>
      <InterfaceList class="col h-100" v-bind:list = list v-bind:currentsheet="currentsheet"></InterfaceList>
  </div>
</template>

<script>
import InterfaceList from "@/components/Home/InterfaceList";
import MenuList from "@/components/Home/MenuList";

export default {
  name: "Home",
  components: {
    InterfaceList,
    MenuList
  },

  data: function (){
    return{
      currentlist: this.$store.getters.getCurrentList,
      currentsheet : this.$store.getters.getCurrentSheet,
      list: this.$store.getters.getList,
      namelist: this.$store.getters.getNameList
    }
  },

  methods: {
    createNewList: function(name){
      this.$store.dispatch('createListAction', name)
      .then( () =>{
        this.currentlist = this.$store.getters.getCurrentList;
        this.list = this.$store.getters.getList;
        this.namelist = this.$store.getters.getNameList;
        this.currentsheet = this.$store.getters.getCurrentSheet;
      })
    },

    setCurrentList: function (newcurrentlist){
      this.currentlist = newcurrentlist;
      this.$store.dispatch("setCurrentListAction", newcurrentlist).then( () =>{
        this.list = this.$store.getters.getList;
        this.currentsheet = this.$store.getters.getCurrentSheet;
          }
      );
    }
  }


}
</script>



<style scoped>

</style>