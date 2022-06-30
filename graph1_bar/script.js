const labels = ['Enero', 'Febrero', 'Marzo', 'Abril']

const graph = document.querySelector("#grafica");

const data = {
    labels: labels,
    datasets: [{
        label:"Ejemplo 1",
        data: [1, 2, 3, 4],
        backgroundColor: 'rgba(9, 129, 176, 0.2)'
    }]
};

const config = {
    type: 'bar',
    data: data,
};

new Chart(graph, config);
