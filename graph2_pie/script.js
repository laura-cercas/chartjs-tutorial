const labels = ['Enero', 'Febrero', 'Marzo', 'Abril']
const colors = ['rgb(69,177,223)', 'rgb(99,201,122)', 'rgb(203,82,82)', 'rgb(229,224,88)'];

const graph = document.querySelector("#grafica");

const data = {
    labels: labels,
    datasets: [{
        data: [1, 2, 3, 4],
        backgroundColor: colors
    }]
};

const config = {
    type: 'pie',
    data: data,
};

new Chart(graph, config);