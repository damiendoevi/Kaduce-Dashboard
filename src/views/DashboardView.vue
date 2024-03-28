<script>
import RadarChartJs from '@/components/RadarChartJs.vue'
import HeightWeightMesure from '@/components/HeightWeightMesure.vue'
export default {
    components: {
        RadarChartJs,
        HeightWeightMesure,
    },
    data() {
        return {
            RadarChartJs,
        }
    },
}
</script>

<template>
    <main class="min-h-screen overflow-hidden w-full p-5" style="background-color: #F5F7FA; font-family: 'Poppins', sans-serif; font-weight: 300; font-style: normal;">
        <section class="flex flex-row flex-lg-nowrap flex-wrap justify-between mb-12 w-full gap-5">
            <div class="rounded-lg p-4 min-h-96 lg:min-w-[400px] min-w-[450px] bg-white shadow-lg mx-auto" id="tendency">
                <h4 class="text-secondary text-xl font-bold">TENDANCES DES MALADIES</h4>
                <radar-chart-js/>
            </div>
            <div class="flex flex-col justify-center rounded-lg p-12 min-h-96 min-w-[500px] grow shadow-lg" id="imc_calculator">
                <div class="flex flex-row mb-16">
                    <h4 class="text-white lg:text-3xl text-2xl mr-auto my-auto">Calculateur d’IMC</h4>
                    <select class="px-1 py-3 min-w-80 rounded-lg text-white border border-white text-center bg-inherit justify-self-end outline-0">
                        <option value="">Semaine Passée</option>
                    </select>
                </div>
                <div class="flex flex-row lg:flex-nowrap flex-wrap gap-5">
                    <div class="flex lg:flex-col flex-row lg:flex-nowrap flex-wrap gap-5 grow">
                        <Height-weight-mesure mesureName="Taille" mesureValue="170cm"/>
                        <Height-weight-mesure mesureName="Poids" mesureValue="72kg" style="background-color: #D0FBFF"/>
                    </div>
                    <div class="grow rounded-lg py-6 px-10" style="background-color: #E7EDFF">
                        <span class="block mb-5 text-2xl">Indice de Masse Corporelle (IMC)</span>
                        <div class="flex flex-row justify-between mb-8">
                            <span class="block text-xl self-center">24.9</span>
                            <span class="block py-3 px-5 rounded-xl font-normal" style="background-color: #D6FFDD">Vous êtes en bonne santé</span>
                        </div>
                        <div class="w-full" id="hint">
                            <span></span>
                            <span class="block w-6 h-3 border-2 border-black rounded-3xl mb-2 ml-[62.25%]" style="background-color: #D16564;"></span>
                            <span class="block h-5 w-full rounded-3xl mb-2"></span>
                            <div class="flex flex-row justify-between font-bold">
                                <span>0</span>
                                <span>10</span>
                                <span>20</span>
                                <span>30</span>
                                <span>40</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full shadow-lg rounded-lg bg-white p-4">
            <h1 class="text-2xl font-bold mb-12" style="color: #343C6A;">Consultation passée</h1>
            <div class="flex flex-row flex-wrap gap-x-8 gap-y-5 mx-5 mb-12" id="filtering-section">
                <div class="w-auto" id="watch">
                    <label class="text-md font-bold text-secondary mr-3" for="montre">Montre</label>
                    <select class="px-1 py-3 min-w-24 rounded-lg bg-white text-secondary outline-0" id="montre">
                        <option value="">12</option>
                        <option value="">11</option>
                        <option value="">10</option>
                    </select>
                </div>
                <div class="grow min-w-80" id="month">
                    <select class="px-1 py-3 w-full rounded-lg bg-white text-secondary outline-0">
                        <option value="">Ce mois: Janvier</option>
                        <option value="">Ce mois: Février</option>
                        <option value="">Ce mois: Mars</option>
                    </select>
                </div>
                <div class="min-w-[400px] grow" id="search">
                    <input class="px-1 py-3 indent-2  w-full rounded-lg bg-white text-secondary outline-0" type="search" name="" value="" placeholder="Recherche de médecins par nom ou par titre">
                </div>
                <div class="min-w-[400px] grow grid grid-cols-3 grid-rows-1 rounded-lg" id="OtherOption">
                    <span class="block py-3 px-2 rounded-l-lg text-md font-bold text-secondary text-center cursor-pointer">Jour</span>
                    <span class="block py-3 px-2 text-md text-md font-bold text-secondary text-center cursor-pointer">Semaine</span>
                    <span class="block py-3 px-2 rounded-r-lg text-md font-bold text-secondary text-center cursor-pointer is-active">Mois</span>
                </div>
            </div>
            <div class="mx-5">
                <table class="table-auto border-collapse border-spacing-0 text-secondary w-full lg:text-lg text-md text-secondary text-center">
                    <thead class="font-bold">
                        <tr>
                            <th class="text-start pl-5"><span class="block mb-5">DOCTEURS</span></th>
                            <th><span class="block mb-5">FICHIERS</span></th>
                            <th><span class="block mb-5">TEMPS</span></th>
                            <th><span class="block mb-5">ACTION</span></th>
                            <th><span class="block mb-5"></span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row justify-between font-bold px-5 py-2 mb-5">
                                    <span class="block rounded-full lg:w-16 lg:h-16 w-12 h-12 doctor-profile my-auto"></span>
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto font-bold">Dr. Ibrahim Yekeni</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">Traitement du paludisme</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto text-danger font-extrabold">2:00PM</span>   
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5" id="actinField">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="min-w-40 rounded-3xl my-auto py-2" href="#">Voir</a>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <button type="button my-auto mr-0">
                                        <span class="text-xl font-bold">.&nbsp;.&nbsp;.</span>
                                    </button>      
                                </div>                        
                            </td>
                        </tr>

                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row justify-between font-bold px-5 py-2 mb-5">
                                    <span class="block rounded-full lg:w-16 lg:h-16 w-12 h-12 doctor-profile my-auto"></span>
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto font-bold">Dr. Ebuka Kelechi</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">Urgence</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto text-danger font-extrabold">5:00AM</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5" id="actionField">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="min-w-40 rounded-3xl my-auto py-2" href="#">Voir</a>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <button type="button my-auto mr-0">
                                        <span class="text-xl font-bold">.&nbsp;.&nbsp;.</span>
                                    </button>   
                                </div>                        
                            </td>
                        </tr>

                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row justify-between font-bold px-5 py-2 mb-5">
                                    <span class="block rounded-full lg:w-16 lg:h-16 w-12 h-12 doctor-profile my-auto"></span>
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto font-bold">Dr. Kemi Olowojeje</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">Test Covid 19 </span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto text-danger font-extrabold">4:00PM</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5" id="actionField">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="min-w-40 rounded-3xl my-auto py-2" href="#">Voir</a>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <button type="button my-auto mr-0">
                                        <span class="text-xl font-bold">.&nbsp;.&nbsp;.</span>
                                    </button>   
                                </div>  
                            </td>
                        </tr>

                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row justify-between font-bold px-5 py-2 mb-5">
                                    <span class="block rounded-full lg:w-16 lg:h-16 w-12 h-12 doctor-profile my-auto"></span>
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto font-bold">Dr. Michael Stwart</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">Test de grossesse</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto text-danger font-extrabold">8:00PM</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5" id="actionField">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="min-w-40 rounded-3xl my-auto py-2" href="#">Voir</a>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <button type="button my-auto mr-0">
                                        <span class="text-xl font-bold">.&nbsp;.&nbsp;.</span>
                                    </button>   
                                </div>                             
                            </td>
                        </tr>

                        <tr>
                            <td class="p-0">
                                <div class="flex flex-row justify-between font-bold px-5 py-2 mb-5">
                                    <span class="block rounded-full lg:w-16 lg:h-16 w-12 h-12 doctor-profile my-auto"></span>
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto font-bold">Dr. Ibrahim Yekeni</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto">Traitement du paludisme</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <span class="block my-auto text-danger font-extrabold">2:00PM</span>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5" id="actionField">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <a class="min-w-40 rounded-3xl my-auto py-2" href="#">Voir</a>
                                </div>
                            </td>
                            <td class="p-0">
                                <div class="flex flex-row justify-center px-5 py-2 mb-5">
                                    <span class="block rounded-full h-16 my-auto"></span>
                                    <button type="button my-auto mr-0">
                                        <span class="text-xl font-bold">.&nbsp;.&nbsp;.</span>
                                    </button>   
                                </div>                     
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
        </section>
    </main>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    .text-secondary {
        color: #343434;
    }

    .text-danger {
        color: #F80D38;
    }

    #filtering-section > #watch > select, #filtering-section > #month > select, #filtering-section > #search > input, 
    #filtering-section > #OtherOption, tbody > tr > td > div > a, #paginationBloc > nav {
        border: 2px solid #EDEDED;
    }    

    #filtering-section > #OtherOption> span:nth-child(2) {
        border-left: 2px solid #EDEDED;
        border-right: 2px solid #EDEDED;
    }

    #filtering-section > #search > input::placeholder {
        color: #343434;
    }

    #OtherOption .is-active {
        background-color: #4FD1C5;
        color: white;
    }

    tbody > tr > td > div > .doctor-profile {
        background-color: #D6D6D6;
        border: 5px solid #E1E1E1;
    }

    tbody > tr > td > div > .doctor-profile {
        background-color: #D6D6D6;
        border: 5px solid #E1E1E1;
    }

    tbody > tr > td > #actionField > a:hover, #paginationBloc > nav > ul .is-active {
        background-color: #1814F3;
        color: white;
        font-weight: bold;
    }

    tbody > tr > td > div {
        border-top: 2px solid #EDEDED;
        border-bottom: 2px solid #EDEDED;
    }

    tbody > tr > td:first-child > div {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-left: 2px solid #EDEDED;
    }
    
    tbody > tr > td:last-child > div {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-right: 2px solid #EDEDED;
    }

    #imc_calculator {
        background: linear-gradient(135deg, #003DFA 0%, #003DFA 50%, #FFFFFF 100%);
    }

    #hint > span:nth-child(3) {
        background: linear-gradient(135deg, #B5D4F1 0%, #81E5DB 25%, #E8D284 50%, #E2798E 100%);
    }
</style>