const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio']

const dataset1 = {
    label: "Dataset 1",
    data: [50, 20, 40, 60, 80, 100],
    borderColor: 'rgba(248, 37, 37, 0.8)',
    backgroundColor: 'rgba(255,0,0,0.29)'
};

const dataset2 = {
    label: "Dataset 2",
    data: [80, 90, 40, 50, 70, 90],
    borderColor: 'rgba(69,200,248,0.8)',
    backgroundColor: 'rgba(0,255,234,0.31)'
};

const graph = document.querySelector("#grafica");

const data = {
    labels: labels,
    datasets: [dataset1,dataset2]
};

const config = {
    type: 'radar',
    data: data,
};

new Chart(graph, config);