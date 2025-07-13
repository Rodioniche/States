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
    }


}

</script>

<template>
<div className="all-comm">
    <div className="in-comm">
        <label className="infos">{{ comm_info.username }}</label>
        <article className="infos">{{ comm_info.text }}</article>
    </div>
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
    flex-direction: column;
    justify-content: center;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3vh;
}
.in-comm {
    width: 100%;
    display: flex;
    flex-direction: column;
    
    margin-right: auto;
    
}
label, article {
    margin-left: 3%;
}

</style>
