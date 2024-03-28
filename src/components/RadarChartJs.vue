<script>
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend, RadarController } from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  RadarController,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

export default {
    name: 'RadarChartJs',
    components: {
        Radar
    },
    data() {
        return {
            Radar,
            type: 'radar',
            data: {
                labels: ["", "", "", "", "", ""],
                datasets: [
                    {
                        label: 'PALUDISME',
                        data: [70, 80, 90, 81, 100, 105],
                        borderWidth: 2,
                        borderColor: "#100DB1",
                        pointRadius: 5,
                        backgroundColor: "#100DB1",
                    },
                    {
                        label: 'COVID 19',
                        data: [5, 10, 15, 20, 25, 30],
                        borderColor: "#FECA57",
                        pointRadius: 5,
                        backgroundColor: "#FECA57",
                        fill: '-1'
                    },
                    {
                        label: 'TYPHOÏDE',
                        data: [28, 48, 40, 19, 96, 27,],
                        borderColor: "#763CEF",
                        pointRadius: 5,
                        backgroundColor: "#763CEF",
                        fill: 1,
                    },
                    {
                        label: 'FIÈVRE',
                        data: [15, 20, 25, 30, 35, 45],
                        borderColor: "#2798F7",
                        pointRadius: 5,
                        backgroundColor: "#2798F7",
                        fill: '-1',
                    },
                    {
                        label: 'MAL DE TÊTE SÉVÈRE',
                        data: [65, 59, 90, 81, 56, 55,],
                        borderColor: "#F80D38",
                        pointRadius: 5,
                        backgroundColor: "#F80D38",
                        fill: {value: 85},
                    },
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                            pointCircle: 'circle',
                        },
                        position: "bottom",
                    },
                    'samples-filler-analyser': {
                        target: 'chart-analyser'
                    }
                },
            },
            fill: {
                target: 'dataset',
                above: 'datasetDisabled',
            },
        }
    }
}
</script>

<template>
  <Radar :data="data" :options="options" :type="type" class="w-auto h-auto"/>
</template>
