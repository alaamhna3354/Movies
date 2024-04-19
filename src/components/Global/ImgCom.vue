<template>
    <div class="image">
        <img v-if="SrcImg" :src="SrcImg" alt="">
        <img v-else src="../../assets/img/Logo.png" alt="">
    </div>
</template>
<script>
export default {
   props: {
   SrcImg: String,
 },

};
</script>