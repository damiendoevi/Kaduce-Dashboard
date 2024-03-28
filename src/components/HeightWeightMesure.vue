<script>
export default {
    name: "HeightWeightMesure",
    props: ['mesureName', "mesureValue"],
}
</script>


<template>
    <div class="flex flex-row justify-between min-w-[450px] min-h-20 px-8 py-4 rounded-lg bg-white grow" id="height">
        <span class="block mt-auto text-lg">{{ mesureName }}</span>
        <div class="ml-auto flex flex-col justify-between">
            <div class="flex flex-row justify-start flex-nowrap gap-x-5 mb-5">
                <span class="inline-block h-5 w-2 rounded-xl" style="background-color: rgba(40, 40, 40, 0.28)"></span>
                <span class="inline-block h-5 w-2 rounded-xl" style="background-color: rgba(40, 40, 40, 0.40)"></span>
                <span class="inline-block h-5 w-2 rounded-xl" style="background-color: rgba(40, 40, 40, 0.70)"></span>
                <span class="inline-block h-9 w-2 rounded-xl" style="background-color: rgb(209, 101, 100)"></span>
                <span class="inline-bloc h-5 w-2 rounded-xl" style="background-color: rgb(40, 40, 40)"></span>
                <span class="inline-bloc h-5 w-2 rounded-xl" style="background-color: rgb(40, 40, 40)"></span>
                <span class="inline-bloc h-5 w-2 rounded-xl" style="background-color: rgb(40, 40, 40)"></span>
                <span class="inline-block h-5 w-2 rounded-xl" style="background-color: rgba(40, 40, 40, 0.60)"></span>
                <span class="inline-block h-5 w-2 rounded-xl" style="background-color: rgba(40, 40, 40, 0.30)"></span>
            </div>
            <span class="block mt-auto text-lg ml-16">{{ mesureValue }}</span>
        </div>
    </div>
</template>