<template>
  <div class="d-flex flex-column h-100">
    <BoardList v-bind:sheet= "list.sheet[currentsheet]"></BoardList>
    <!--<BoardMenu v-bind:sheet= list.sheet v-bind:currentsheet="currentsheet" v-on:create-new-sheet="createNewSheet" v-on:set-current-sheet="setCurrentSheet"></BoardMenu> -->
  </div>


</template>


<script>
import BoardList from "@/components/Home/InterfaceList/BoardList";
import BoardMenu from "@/components/Home/InterfaceList/BoardMenu";

export default {
  name: "InterfaceList",
  props: ['list', 'currentsheet'],
  components: {
    BoardList,
    BoardMenu
  },

  data: function (){
    return{

    }
  },

  methods: {
    createNewSheet: function (name){
      this.$store.dispatch("createSheetAction", name)
      .then( ()=>{
        this.currentsheet = this.$store.getters.getCurrentSheet;
        this.sheet = this.$store.getters.getSheet;
      });
    },

    setCurrentSheet: function (newcurrentsheet){
      this.currentsheet = newcurrentsheet;
      this.$store.dispatch("setCurrentSheetAction", newcurrentsheet);
    }

  },

  mounted() {

  }

}
</script>

<style scoped>

</style>