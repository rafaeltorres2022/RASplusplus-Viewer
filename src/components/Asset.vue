<template>
    <div class="container">
        <p>{{asset.nome}}</p>
        <ul v-for="(value, key) in asset.dg"
        :key="key">
            <ol>{{key}}: {{value}}</ol>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Asset',
    props: {
        asset: {
            type: Object
        }
    }
}
</script>

<style>
ul, ol{
    padding: 0%;
}
.container{
    border-radius: 5px;
    border: 2px solid rgb(214, 207, 207);   
    margin: 10px;
    padding: 10px;
    display: inline-block;
}
.container p{
    text-align: center;
}
</style>