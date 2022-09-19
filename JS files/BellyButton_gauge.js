// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples = data.samples;
    console.log(samples);

    // Create a variable that filters the samples for the object with the desired sample number.
    var filteredSamples = samples.filter(sampleObj => sampleObj.id == sample);
    console.log(filteredSamples);

    // 1. Create a variable that filters the metadata array for the object with the desired sample number.

    // Create a variable that holds the first sample in the array.
    var results = filteredSamples[0];
    console.log(results);

    // 2. Create a variable that holds the first sample in the metadata array.
    

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otu_ids = results.otu_ids;
    console.log(otu_ids);

    var otu_labels = results.otu_labels;
    //console.log(otu_labels);

    var sample_values = results.sample_values;
    //console.log(sample_values);

    // 3. Create a variable that holds the washing frequency.
   
    // Create the yticks for the bar chart.
    var yticks = otu_ids.slice(0, 10).map((otuID) => `OTU ${otuID}`).reverse();

    // Use Plotly to plot the bar data and layout.
     Plotly.newPlot("bar", barData, barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        title: { text: "<b>Belly Button Washing Frequency</b> <br>Scrubs Per Week" },
        value: parseFloat(washFrequency),
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: { range: [0, 10], tickwidth: 2, tickcolor: "black" },
          bar: { color: "black" },
          steps: [
            { range: [0, 2], color: "red" },
            { range: [2, 4], color: "orange" },
            { range: [4, 6], color: "yellow" },
            { range: [6, 8], color: "lightgreen" },
            { range: [8, 10], color: "green" },
          ],
        }
      }
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      width: 500, 
      height: 425, 
      margin: { t: 0, b: 0 } };

// 6. Use Plotly to plot the gauge data and layout.
Plotly.newPlot("gauge", gaugeData, gaugeLayout);

});
}


