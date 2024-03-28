<script>
export default {
    name: "DashboardPaginationBloc.vue",
}
</script>

<template>
    <div>
        <div class="flex flex-row mx-5" id="paginationBloc">
            <nav class="min-w-[100px] px-3 py-2 ml-auto rounded-3xl">
                <ul class="list-none flex flex-row flex-nowrap gap-x-4 text-lg">
                    <li>
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">&lt;</span>
                        </a>
                    </li>
                    <li class="">
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center is-active" href="#">
                            <span class="block my-auto">1</span>
                        </a>
                    </li>
                    <li class="">
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">2</span>
                        </a>
                    </li>
                    <li class="">
                    <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">3</span>
                        </a>
                    </li>
                    <li class="">
                        <a class="flex flex-row justify-center w-10 h-10 rounded-full text-center" href="#">
                            <span class="block my-auto">&gt;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>


<style scoped>
    #paginationBloc > nav {
        border: 2px solid #EDEDED;
    }    

    #paginationBloc > nav > ul .is-active {
        background-color: #1814F3;
        color: white;
        font-weight: bold;
    }

    #paginationBloc > nav > ul li > a:not(.is-active):hover{
        background-color: rgba(24, 20, 243, 0.3);
        color: white;
        font-weight: bold;
    }
</style>