<template>
    <div class="result">
        <div class="result_detail">
           <span>得分：{{sorce}}</span> 
           <span>用时：{{$route.query.time}}</span> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            sorce:this.$route.query.sorce
        }
    }
}
</script>
<style lang="less" scoped>
    .result{
        position: fixed;
        left: 0px;
        top: 0px;
        right: 0px;
        bottom: 0px;
        z-index: 999;
        background: #fff;
        background: url("../assets/img/psd28851.png");
        .result_detail{
            margin-top: 200px;
        }
    }
</style>