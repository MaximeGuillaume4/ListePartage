import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentlist: 0,
        currentsheet: 0,
        list: [{
            id: 0,
            name: "list1",

            sheet: [{
                id: 0,
                name: "sheet1",

                board: [{
                    id: 0,
                    produit: '',
                    prix: 0,
                    lien: '', 
                    description: ''
                }]
            }]
        }]
    },

    mutations: {
        createList: function(state, name){
            let list_lenght = state.list.length;
            state.list.push({
                id: list_lenght,
                name: name,

                sheet: [{
                    id: 0,
                    name: "sheet1",

                    board: [{
                        id: 0,
                        produit: '',
                        prix: 0,
                        lien: '',
                        description: ''
                    }]
                }]
            });
            state.currentlist = list_lenght;
            state.currentsheet = 0;
        },

        createSheet: function (state, name){
            let sheet_lenght = state.list[state.currentlist].sheet.length;
            state.list[state.currentlist].sheet.push({
                id: sheet_lenght,
                name: name,
                board: [{
                    id: 0,
                    produit: '',
                    prix: 0,
                    lien: '',
                    description: ''
                }]
            });
            state.currentsheet = sheet_lenght;
        },

        setCurrentList: function (state, listid){
            state.currentlist = listid;
            state.currentsheet = 0;
        },

        setCurrentSheet: function (state, sheetid){
            state.currentsheet = sheetid;
        },

        addLine: function (state, payload){
            let sheetid = payload[0];
            let newline = payload[1];
            state.list[state.currentlist].sheet[sheetid].board.push(newline);
        }

    },

    actions: {
        createListAction: function(context, name){
            context.commit("createList", name);
        },

        createSheetAction: function(context, name){
            context.commit("createSheet", name);
        },

        setCurrentListAction: function (context, listid){
            context.commit("setCurrentList", listid);
        },

        setCurrentSheetAction: function (context, sheetid){
            context.commit("setCurrentSheet", sheetid);
        },

        addLineAction: function (context, payload){
            context.commit("addLine", payload);
        }

    },

    getters: {
        getList: function (state) {
            return state.list[state.currentlist];
        },

        getSheet: function (state) {
            return state.list[state.currentlist].sheet;
        },

        getCurrentList: function (state){
            return state.currentlist;
        },

        getCurrentSheet: function (state){
            return state.currentsheet;
        },

        getNameList: function (state){
            let namelist = [];
            state.list.forEach( l=>{
                let id = l.id;
                let name = l.name;
                namelist.push({id, name})
            })
            return namelist;
        }

    }
});
