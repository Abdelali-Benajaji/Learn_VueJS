let app = Vue.createApp({
    data: function(){
        return{
            greeting:"Hello Vue JS"
        }
    }
})

app.component("login-form",{
    template:`
        <form @submit.prevent="handleSubmit">
            <h3>{{ Form_title }}</h3>
            <custom-inputs 
                v-for="(input , i) in inputs"
                :key="i"
                :label="input.label"
                :type="input.type"
                v-model="input.value"  
            /><br><br>
            <input type="submit" value="LogIn"/>
        </form>
    `,
    components: ["custom-inputs"],
    data() {
        return{
            Form_title : "LOGIN Form",
            inputs : [
                {
                    label:"Enter your Email",
                    type:"email",
                    value:''
                },
                {
                    label:"Password",
                    type:"password",
                    value:''
                },
            ],

        }
    },
    methods:{
        handleSubmit(){
            alert("email:"+ this.inputs[0].value+"\n"+"password:"+this.inputs[1].value)
        }
    }
})

app.component("custom-inputs",{
    template:`
        <label>
           {{label}}
            <input :type="type" v-model="inputValue" /> 
        </label>
        
    `,
    props: ["label","type","modelValue"],
    computed: {
        inputValue: {
            get(){
                return this.modelValue
             },
             set(value){
                this.$emit('update:modelValue', value)
             }
        }

    }
})

app.mount('#app')