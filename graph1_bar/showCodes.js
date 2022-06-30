const graph1_jscode="<pre><code>const labels = [&#39;Enero&#39;, &#39;Febrero&#39;, &#39;Marzo&#39;, &#39;Abril&#39;]\n" +
    "\n" +
    "const graph = document.querySelector(&quot;#grafica&quot;);\n" +
    "\n" +
    "const data = {\n" +
    "\tlabels: labels,\n" +
    "\tdatasets: [{\n" +
    "\t\tlabel:&quot;Ejemplo 1&quot;,\n" +
    "\t\tdata: [1, 2, 3, 4],\n" +
    "\t\tbackgroundColor: &#39;rgba(9, 129, 176, 0.2)&#39;\n" +
    "\t}]\n" +
    "};\n" +
    "\n" +
    "const config = {\n" +
    "\ttype: &#39;bar&#39;,\n" +
    "\tdata: data,\n" +
    "\t};\n" +
    "new Chart(graph, config);</pre></code>";

const graph1_htmlcode="<pre><code>&lt;div style=&quot;width: 600px&quot;&gt;\n" +
    "\t&lt;canvas id=&quot;grafica&quot;&gt;&lt;/canvas&gt;\n" +
    "&lt;/div&gt;</code></pre>";

document.getElementById('graph1-js').innerHTML = graph1_jscode;
document.getElementById('graph1-html').innerHTML = graph1_htmlcode;
