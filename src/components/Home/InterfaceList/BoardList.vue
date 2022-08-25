<template>
  <div class="d-flex flex-column overflow-hidden col m-0 p-1 pb-1">
    <b-table sticky-header="100%" responsive striped :items="sheet.board" :fields="fields" class="col">

      <!-- PRODUIT -->
      <template #cell(produit)="data">
        <div @click="editCellHandler(data, 'produit')" style="min-height: 2vh">
          <b-form-input  id="cellid" type="text" size="sm" v-if="sheet.board[data.item.id].isEdit && selectedCell === 'produit'" v-model="sheet.board[data.item.id].produit" autofocus></b-form-input>
          <span v-else>{{data.value}}</span>
        </div>
      </template>

      <!-- PRIX -->
      <template #cell(prix)="data">
        <div @click="editCellHandler(data, 'prix')" style="min-height: 2vh">
          <b-form-input id="cellid"  type="number" :min=0 size="sm" v-if="sheet.board[data.item.id].isEdit && selectedCell === 'prix'" v-model="sheet.board[data.item.id].prix" autofocus></b-form-input>
          <span v-else>{{data.value}}</span>
        </div>
      </template>

      <!-- LIEN -->
      <template #cell(lien)="data">
        <div @click="editCellHandler(data, 'lien')" style="min-height: 2vh">
          <b-form-input id="cellid" type="text" size="sm" v-if="sheet.board[data.item.id].isEdit && selectedCell === 'lien'" v-model="sheet.board[data.item.id].lien" autofocus></b-form-input>
          <span v-else>{{data.value}}</span>
        </div>
      </template>

      <!-- DESCRIPTION -->
      <template #cell(description)="data">
        <div @click="editCellHandler(data, 'description')" style="min-height: 2vh">
          <b-form-input id="cellid" type="text" size="sm" v-if="sheet.board[data.item.id].isEdit && selectedCell === 'description'" v-model="sheet.board[data.item.id].description" autofocus></b-form-input>
          <span v-else>{{data.value}}</span>
        </div>
      </template>
    </b-table>
    <b-button v-on:click="addLine"> New Line</b-button>
  </div>
</template>

<script>
export default {
  name: "BoardList",
  props:['sheet'],
  data: function() {
    return {
      fields: [
        {
          key: 'produit',
          label: 'Produit',
          sortable: true
        },
        {
          key: 'prix',
          label: 'Prix (€)',
          sortable: true
        },
        {
          key: 'lien',
          label: 'Lien',
          sortable: false
        },
        {
          key: 'description',
          label: 'Description',
          sortable: false
        },
      ],
      selectedCell: null
    }
  },

  methods: {
    editCellHandler(data, name) {
      this.sheet.board = this.sheet.board.map(item => ({...item, isEdit: false}));
      this.sheet.board[data.item.id].isEdit = true;
      this.selectedCell = name
    },

    removeCell() {
      if(document.getElementById("cellid")){
        document.getElementById("cellid").addEventListener("focusout" , () => {
          this.selectedCell = null
        })
        document.getElementById("cellid").addEventListener("keypress" , (e) => {
          if(e.key === 'Enter'){
            this.selectedCell = null
          }
        })
      }
    },

    addLine: function (){
      let newline = {
        id: this.sheet.board.length,
        produit: '',
        prix: 0,
        lien: '',
        description: ''
      };
      //this.sheet.board.push(newline);
      this.$store.dispatch("addLineAction", [this.sheet.id, newline]);
    }

  },

  mounted() {
    this.sheet.board = this.sheet.board.map(item => ({...item, isEdit: false}));

    document.addEventListener("click", () => {
      this.removeCell()
    })
  }
}
</script>

<style>
td {
  text-align: left;
  width: 25%;
  vertical-align: middle;
}


</style>