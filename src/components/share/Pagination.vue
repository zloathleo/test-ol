<template>
    <ul class="w3-pagination w3-border w3-small  pagination">
        <li @click="firstPage()">
            <a href="#">«</a>
        </li>

        <li v-for="index in pageCount" @click="clickPageCount(index)">
            <a v-bind:class="{ 'color-primary': current === index }" href="#">{{index}}</a>
        </li>

        <li>
            <a role="button" @click="lastPage()" href="#">»</a>
        </li>
    </ul>
</template>

<style scoped lang="less">
.pagination {
  margin: 1rem 0 0 !important;
}
</style>

<script>  
export default {
    props: ['total', 'current', 'perPage'],
    watch: {
        'total': function () { 
            this.pageCount = Math.ceil(this.total / this.perPage);
        },
        'perPage': function () { 
            // this.current = 1;
            this.pageCount = Math.ceil(this.total / this.perPage);
        }
    },
    data() {
        return {
            pageCount: Math.floor(this.total / this.perPage),//页面数量
        }
    },
    mounted() {

    },
    methods: {
        clickPageCount(index) {
            this.$emit('update:current', index);
        },
        firstPage(index) {
            this.$emit('update:current', 1);
        },
        lastPage(index) {
            this.$emit('update:current', this.pageCount);
        },
    }
}
</script>