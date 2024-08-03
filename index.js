console.log("Hello World!");


// Current date for the title
const dateElement = document.getElementById('date');

console.log(dateElement);

let currentDate = new Date();

console.log(currentDate);

// dateElement.innerHTML = currentDate;

let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'};

dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


// Rapid API Code to retrieve the Trending Twitter Topics
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const data = new FormData();
data.append('woeid', '23424934');

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '319d843736mshdea97cf204a7577p18242fjsn0d8bc5fef9d6',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com'
	},
	body: data
};


// ==========================================
// dummy data to comment out later (start)
// ==========================================

// let myPost = {
// 	name: "Lee Sung Kyung",
// 	queryURL: "search?q=%22Lee+Sung+Kyung%22",
// 	volume: 31799,
// 	followers: 3895734
// };


// console.log (myPost);
// console.log (myPost.name);
// console.log (myPost.queryURL);
// console.log (myPost.volume);
// console.log (myPost.followers);


// let graphData = [
// 		{name: "#PorDeeReunion", queryUrl: "search?q=%23PorDeeReunion", volume: 67000},
//         {name: "#BGYO3rdAnniversary", queryUrl: "search?q=%23BGYO3rdAnniversary", volume: 27400}
//     ];

// console.log(graphData)
// console.log(graphData[1]);
// console.log(graphData[1].name);

// console.log(graphData);
// // we can use push() method to add elements in an array.
// graphData.push(myPost);
// console.log(graphData);

// ==========================================
// dummy data to comment out later (end)
// ==========================================


let graphData = [];



// this fetch request allows us to retrieve the data from Twitter
fetch(url, options)
.then(res => res.json())
.then(data => {

	console.log(data);


	console.log(graphData.length);

// for loops are use to do repititive task, in this case to print out each individual elements in the graphData array and their respective properties.
for (let i = 0; i < 25; i++) {
	graphData.push(
		{
			"name": data.trends[i].name,
			"volume": data.trends[i].volume
		}
	)
	};




// This allows us to return only the name of the twitter trend object.
let topics = graphData.map(object => {
	console.log(object);
	console.log(object.name);
	return object.name;
});


console.log(topics);
let volumes = graphData.map(object =>{
	return object.volume;
});



console.log(volumes);

// Chart Template from ChartJS.
const myChart = document.getElementById('myChart');

let barChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics,
      datasets: [{
        label: '# of tweets/xeets',
        data: volumes,
        borderWidth: 2,
        backgroundColor: [        
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ],
        hoverBackgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
       	'rgb(75, 192, 192)',
       	'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ]
      }]
    },
    options: {
    	indexAxis: 'y',
      scales: { 
        y: {
          beginAtZero: true
        }
      }
    }
  });




});


// =================================
// copy passte to fetch request (start)
// =================================

// console.log(graphData.length);

// // for loops are use to do repititive task, in this case to print out each individual elements in the graphData array and their respective properties.
// for (let i = 0; i < 2; i++) {
// 	console.log(graphData[i]);
// 	console.log(graphData[i].name);
// 	console.log(graphData[i].queryURL);
// 	console.log(graphData[i].volume);
// };




// // This allows us to return only the name of the twitter trend object.
// let topics = graphData.map(object => {
// 	console.log(object);
// 	console.log(object.name);
// 	return object.name;
// });


// console.log(topics);
// let volumes = graphData.map(object =>{
// 	return object.volume;
// });



// console.log(volumes);

// // Chart Template from ChartJS.
// const myChart = document.getElementById('myChart');

// let barChart = new Chart(myChart, {
//     type: 'bar',
//     data: {
//       labels: topics,
//       datasets: [{
//         label: '# of tweets/xeets',
//         data: volumes,
//         borderWidth: 2,
//         backgroundColor: [        
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 205, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//         'rgb(75, 192, 192)',
//         'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)'
//         ],
//         hoverBackgroundColor: [
//         'rgb(255, 99, 132)',
//         'rgb(255, 159, 64)',
//         'rgb(255, 205, 86)',
//        	'rgb(75, 192, 192)',
//        	'rgb(54, 162, 235)',
//         'rgb(153, 102, 255)',
//         'rgb(201, 203, 207)'
//         ]
//       }]
//     },
//     options: {
//     	indexAxis: 'y',
//       scales: { 
//         y: {
//           beginAtZero: true
//         }
//       }
//     }
//   });



// =================================
// copy passte to fetch request (end)
// =================================





