// d3.csv('student_startup_success_dataset.csv', d => ({
//     team_size: d.team_size,
//     avg_team_experience: d.avg_team_experience,
//     innovation_score: d.innovation_score,
//     mentorship_support: d.mentorship_support,
//     incubation_support: d.incubation_support,
//     market_readiness_level: d.market_readiness_level,
//     success: d.success
// })).then(data => {

//Load in csv file and assign its values to svg, converting string to number
d3.csv('example.csv', d => ({
    name: d.name,
    age: +d.age,
    grade: +d.grade
})).then(data => {
    const svg = d3.select('#d3chart')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500)
        .style('background-color', '#666666');

    svg.selectAll('circle')
        .data(data)
    .enter()
        .append('circle')
            .attr('id', function(d) { return d.name;})
            .attr('r', function(d) { return d.age / 1000 * 3;})
            .attr('cy', function(d) { return d.grade * 3})
        .append('svg:title')
        .text(function(d) { return `Student ${d.name}`})
})









//     // Create SVG - container for visualization
//     const svg = d3.select('#d3chart').append('svg')
//         .attr('width', 500)
//         .attr('height', 500)
//         .style('background-color', '#666666')
//
//     svg.selectAll('circle')
//         .data(data)
//         .enter()
//         .append('circle')
//         .attr('project_id', function(d) { return d.team_size})
// })



