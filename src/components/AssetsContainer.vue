<template>
    <header>
        <input v-model="filterTerm" autofocus="true" placeholder="Pesquisar..."/>
    </header>
    <div class="columns is-mobile is-multiline">  
        <div class="column is-narrow" v-for="asset in fillRepositorio"
        v-bind:key="asset.id">
            <Asset :asset=asset />
        </div>
    </div>
</template>

<script>
import Asset from "./Asset";

export default {
    name : 'AssetsContainer',
    data(){
        return{
            filterTerm: '',
        }
    },
    components:{
        Asset
    },
    computed: {
        fillRepositorio() {
            //let fileNames = ["remoddrepo-classification.raspp", "mdgd2018.raspp", "mdwe2018.raspp"]
            let repositorio = []
            
            for (let filePath of [1,2,3,4,5,6,7,8,9,10]){
                repositorio.push({
                    nome: `Asset ${filePath}`,
                    id: filePath,
                    dg: { 'DG1': `DG ${filePath}`,
                        'DG2': `DG ${filePath+1}`,
                    }
                    })
            }

            return repositorio
        }
    }
}
</script>

<style scoped>
div{
    align-content: center;
}
header{
    background-color: #e9dddd;
    padding: 10px;
}
input{
    background: whitesmoke;
    border: none;
    border-radius: 5px;
    padding: 10px;
}
input:focus{
    outline: none;
}

</style>