<template>
    <section id="flip-scroll" class="container" v-if="dataTable.length > 0">
        <div v-if="data.length > 0" id="table_card_cotainer">
            <table class="table table-bordered table-hover table-responsive border-start" id="table-cards">
                <thead>
                    <tr>
                        <th v-show="showIndexTable">
                            #
                        </th>
                        <th v-for="key  in  Object.keys(data[0])" :key="key" v-show="CleanTableView(key)" scope="col">
                            {{ key.toLocaleUpperCase() }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="item" class="row-card-list ms-1" @click="SelectRow($event, index)">
                        <th scope="row" v-show="showIndexTable">
                            {{ index }}
                        </th>
                        <td v-for="(value, key) in item" :key="value" v-show="CleanTableView(key)">
                            {{ value }}
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            No hay charlas disponibles.
        </div>
    </section>
</template>
<script>
// import StarRating from 'vue-star-rating';

export default {
    name: "TableCards",
    data() {
        return {
            data: [],
            row: null,
            indexSelected: null
        }
    },
    emits: [
        'selected_row_item',
        'selected_row_index',
    ],
    props: {
        dataTable: {
            type: Array,
            default: () => []
        },
        showId: {
            type: Boolean,
            default: false
        },
        showIndexTable: {
            type: Boolean,
            default: true
        },
        selectRowColor: {
            type: String,
            default: "grey"
        },
    },
    methods: {
        // Para ocultar datos que no necesitamos mostrar en la tabla (ID´s)
        CleanTableView(value) {
            var regex = /id|ID/;
            if (this.showId) {
                return true
            }
            if (value.match(regex)) {
                return false;
            }
            return true;
        },
        SelectRow(event, index) {
            this.indexSelected = index;
            if (this.row) {
                this.row.forEach((cell) => {
                    cell.style["background-color"] = "";
                });
            }
            // Get and set background color for the clicked row
            this.row = Array.prototype.slice.call(event.currentTarget.children);
            this.row.forEach((cell) => {
                cell.style["background-color"] = this.selectRowColor;
            });

            if (this.indexSelected != null) {
                this.$emit('selected_row_item', this.data[this.indexSelected]);
                this.$emit('selected_row_index', this.indexSelected);
            }

        },
    },
    mounted() {
        this.data = this.dataTable;
    },
    watch: {
        dataTable: {
            handler(newData) {
                this.data = newData;
            },
            immediate: true
        }
    }
}
</script>
<style>
#flip-scroll * html .cf {
    zoom: 1;
}

#flip-scroll *:first-child+html .cf {
    zoom: 1;
}



#flip-scroll th {
    text-align: left;
    size: 0.3rem;
}

#flip-scroll table {
    display: block;
    position: relative;
    width: 100%
}

#flip-scroll thead {
    display: block;
    float: left;
}

#flip-scroll tbody {
    display: block;
    width: auto;
    position: relative;
    white-space: nowrap;
}

#flip-scroll thead tr {
    display: block;
}

#flip-scroll th {
    display: block;
    text-align: right;
}

#flip-scroll tbody tr {
    display: inline-block;
    vertical-align: top;
    border-radius: 20px;
}

#flip-scroll td {
    display: block;
    min-height: 2.5em;
    text-align: left;
}

.row-card-list th:first-child {
    border: 1px solid #babcbf;
    border-radius: 10px 10px 0px 0px;
}

.row-card-list td:last-child {
    border: 1px solid #babcbf;
    border-radius: 0px 0px 10px 10px;
}

#flip-scroll th {
    border-bottom: 0;
    border-left: 0;
}

#flip-scroll td {
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
}

#flip-scroll tbody tr {
    border: 1px solid #babcbf;
    border-radius: 10px 10px 0px 0px;
}

</style>    