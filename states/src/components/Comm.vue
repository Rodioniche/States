<script>






export default {
    data() {
        return {

        }
    },
    props: {
        comm_info: {
            type: Object,
            required: true
        }
    },
    methods: {
        DelCommet() {
            this.$emit('delete_item', this.comm_info.id_comm);
            
            }
    }

}

</script>

<template>
<div className="all-comm">
    <div className="in-comm">
        <label className="infos">{{ comm_info.username }}</label>
        <article className="infos">{{ comm_info.text }}</article>
    </div>
    <svg width="800px" @click.stop height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="DelCommet" >
        <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
</template>

<style scoped>
.all-comm {
    width: 100%;
    min-height: 5vh;
    max-height: 20vh;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 3px rgba(221, 222, 228, 0.867);
    display: flex;
    
    justify-content: center;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
}
svg {
    width: 5%;
    height: 5%;
}
.in-comm {
    width: 70%;
    display: flex;
    flex-direction: column;
    
    margin-right: auto;
    
}
label, article {
    margin-left: 3%;
}

</style>
