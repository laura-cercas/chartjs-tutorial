const graph4_jscode="<pre style='height:400px'><code >const labels = [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;, &#39;Mayo&#39;, &#39;Junio&#39;]\n" +
    "\n" +
    "const dataset1 = {\n" +
    "    label: &quot;Dataset 1&quot;,\n" +
    "    data: [50, 20, 40, 60, 80, 100],\n" +
    "    borderColor: &#39;rgba(248, 37, 37, 0.8)&#39;,\n" +
    "    backgroundColor: &#39;rgba(255,0,0,0.29)&#39;\n" +
    "};\n" +
    "\n" +
    "const dataset2 = {\n" +
    "    label: &quot;Dataset 2&quot;,\n" +
    "    data: [80, 90, 40, 50, 70, 90],\n" +
    "    borderColor: &#39;rgba(69,200,248,0.8)&#39;,\n" +
    "    backgroundColor: &#39;rgba(0,255,234,0.31)&#39;\n" +
    "};\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#grafica&quot;);\n" +
    "\n" +
    "const data = {\n" +
    "    labels: labels,\n" +
    "    datasets: [dataset1,dataset2]\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;radar&#39;,\n" +
    "    data: data,\n" +
    "};\n" +
    "\n" +
    "new Chart(graph, config);</code></pre>";
const graph4_htmlcode="<pre><code>&lt;div style=&quot;width: 700px&quot;&gt;\n" +
    "\t&lt;canvas id=&quot;grafica&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph4-js').innerHTML = graph4_jscode;
document.getElementById('graph4-html').innerHTML = graph4_htmlcode;