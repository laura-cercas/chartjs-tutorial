const graph3_jscode="<pre style='height:400px'><code >const labels = [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;]\n" +
    "\n" +
    "const dataset1 = {\n" +
    "    label: &quot;Dataset 1&quot;,\n" +
    "    data: [10, 55, 60, 120],\n" +
    "    borderColor: &#39;rgba(248, 37, 37, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    tension: 0.1\n" +
    "};\n" +
    "\n" +
    "const dataset2 = {\n" +
    "    label: &quot;Dataset 2&quot;,\n" +
    "    data: [5, 44, 55, 100],\n" +
    "    borderColor: &#39;rgba(69, 248, 84, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    tension: 0.1\n" +
    "};\n" +
    "\n" +
    "const dataset3 = {\n" +
    "    label: &quot;Dataset 3&quot;,\n" +
    "    data: [20, 40, 55, 120],\n" +
    "    borderColor: &#39;rgba(69, 140, 248, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    tension: 0.1\n" +
    "};\n" +
    "\n" +
    "const dataset4 = {\n" +
    "    label: &quot;Dataset 4&quot;,\n" +
    "    data: [18, 40, 20, 100],\n" +
    "    borderColor: &#39;rgba(245, 40, 145, 0.8)&#39;,\n" +
    "    fill: false,\n" +
    "    tension: 0.1\n" +
    "};\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#grafica&quot;);\n" +
    "\n" +
    "const data = {\n" +
    "    labels: labels,\n" +
    "    datasets: [dataset1,dataset2,dataset3,dataset4]\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;line&#39;,\n" +
    "    data: data,\n" +
    "};\n" +
    "\n" +
    "new Chart(graph, config);</code></pre>";
const graph3_htmlcode="<pre><code>&lt;div style=&quot;width: 400px&quot;&gt;\n" +
    "\t&lt;canvas id=&quot;grafica&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph3-js').innerHTML = graph3_jscode;
document.getElementById('graph3-html').innerHTML = graph3_htmlcode;