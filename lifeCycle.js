let app = Vue.createApp({
    data: function(){
        return{
            isVisible: false
        }
    },
    methods: {
        toggleBox: function(){
            this.isVisible = !this.isVisible
            
        }
    },
    updated(){
        console.log("Updated")

    }
})

app.component("test-box",{
    template:`
        <div class="box">
        </div>
        
    `,

    //life Cycles
    created(){
        console.log("Created")
    },
    mounted(){
        console.log("Mounted")
    },
    unmounted(){
        console.log("UnMounted")
    },
})

app.mount('#app')