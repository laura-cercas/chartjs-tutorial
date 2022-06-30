const graph2_jscode="<pre><code>const labels = [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;]\n" +
    "const colors = [&#39;rgb(69,177,223)&#39;, &#39;rgb(99,201,122)&#39;, &#39;rgb(203,82,82)&#39;, &#39;rgb(229,224,88)&#39;];\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#grafica&quot;);\n" +
    "\n" +
    "const data = {\n" +
    "    labels: labels,\n" +
    "    datasets: [{\n" +
    "        data: [1, 2, 3, 4],\n" +
    "        backgroundColor: colors\n" +
    "    }]\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "    type: &#39;pie&#39;,\n" +
    "    data: data,\n" +
    "};\n" +
    "\n" +
    "new Chart(graph, config);</code></pre>";
const graph2_htmlcode="<pre><code>&lt;div style=&quot;width: 500px&quot;&gt;\n" +
    "\t&lt;canvas id=&quot;grafica&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";
document.getElementById('graph2-js').innerHTML = graph2_jscode;
document.getElementById('graph2-html').innerHTML = graph2_htmlcode;