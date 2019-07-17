<template>
    <div class="container container-pagination">
        <button class="ui labeled icon button">
            <i class="chevron left icon"></i>
            Prev
        </button>
        <div class="ui pagination menu">
            <a class="item">1</a>
        </div>
        <button class="ui right labeled icon button">
            <i class="chevron right icon"></i>
            Next
        </button>
    </div>
</template>

<style>

    div.container-pagination{
        display: inline-flex;
    }

    div.ui.pagination.menu{
        margin: 0 0.5em 0 0.5em;
    }

</style>


<script>
export default {
    name: 'PaginationComponent'
}
</script>

