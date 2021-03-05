const app = Vue.createApp({
    data(){
        return {
            repositorio,
            filterTerm : ''
        };
    },
    computed: {
        filteredAssets: function (a) {
            return self.repositorio.filter(function(asset){
                var name = asset.name.toLowerCase();
                var matchName = name.toLowerCase().indexOf(a.filterTerm.toLowerCase()) > -1;
                var matchDg = false;
                for(dg in asset.classification){
                    for(value of asset.classification[dg]){
                        if (value.toLowerCase().indexOf(a.filterTerm.toLowerCase()) > -1){
                            matchDg = true;
                            break;
                        }
                    }
                }
                return matchName || matchDg;
            })
        }
    }
});

app.component('asset-template', {
    props: ['asset'],
    template: `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{asset.index}} -- {{asset.name}}</h5>
            <p>Id: {{asset.id}}</p>
            <ol v-for="(value, key) in asset.classification">
                <p>{{key}} : 
                    <ol v-for="v in value">
                        <p>{{v}}</p>
                    </ol>
                </p>
            </ol>
        </div>
    </div>
    `
})

app.mount("#app");