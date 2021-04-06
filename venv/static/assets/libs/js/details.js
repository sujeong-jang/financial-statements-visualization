//
//var ctx = document.getElementById("stock_chart").getContext('2d');
//var stock_chart = new Chart(ctx, {
//    type: 'line',
//
//
//    data: {
//        labels: stock_date,
//        datasets: [{
//            label: corp_name,
//            data: stock_prices,
//
//            backgroundColor: "rgba(89, 105, 255,0.5)",
//            borderColor: "rgba(89, 105, 255,0.7)",
//            borderWidth: 2
//        }]
//
//    },
//    options: {
//        legend: {
//            display: true,
//            position: 'bottom',
//
//            labels: {
//                fontColor: '#71748d',
//                fontFamily: 'Circular Std Book',
//                fontSize: 14,
//            }
//        },
//
//        scales: {
//            xAxes: [{
//                ticks: {
//                    fontSize: 14,
//                    fontFamily: 'Circular Std Book',
//                    fontColor: '#71748d',
//                }
//            }],
//            yAxes: [{
//                ticks: {
//                    fontSize: 14,
//                    fontFamily: 'Circular Std Book',
//                    fontColor: '#71748d',
//                }
//            }]
//        }
//    }
//})

var data_3m = {
    labels: stock_3m_date,
    datasets: [{
        label: corp_name,
        data: stock_3m_prices,

        backgroundColor: "rgba(89, 105, 255,0.5)",
        borderColor: "rgba(89, 105, 255,0.7)",
        borderWidth: 2,
        pointRadius: 0
    }]
};
var data_6m = {
    labels: stock_6m_date,
    datasets: [{
        label: corp_name,
        data: stock_6m_prices,

        backgroundColor: "rgba(89, 105, 255,0.5)",
        borderColor: "rgba(89, 105, 255,0.7)",
        borderWidth: 2,
        pointRadius: 0
    }]
};
var data_1y = {
    labels: stock_1y_date,
    datasets: [{
        label: corp_name,
        data: stock_1y_prices,

        backgroundColor: "rgba(89, 105, 255,0.5)",
        borderColor: "rgba(89, 105, 255,0.7)",
        borderWidth: 2,
        pointRadius: 0
    }]
};
var data_3y = {
    labels: stock_3y_date,
    datasets: [{
        label: corp_name,
        data: stock_3y_prices,

        backgroundColor: "rgba(89, 105, 255,0.5)",
        borderColor: "rgba(89, 105, 255,0.7)",
        borderWidth: 2,
        pointRadius: 0
    }]
};
var data_5y = {
    labels: stock_5y_date,
    datasets: [{
        label: corp_name,
        data: stock_5y_prices,

        backgroundColor: "rgba(89, 105, 255,0.5)",
        borderColor: "rgba(89, 105, 255,0.7)",
        borderWidth: 2,
        pointRadius: 0
    }]
};

var options = {
    maintainAspectRatio: false,
    legend: {
        display: true,
        position: 'bottom',

        labels: {
            fontColor: '#71748d',
            fontFamily: 'Circular Std Book',
            fontSize: 14,
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontSize: 14,
                fontFamily: 'Circular Std Book',
                fontColor: '#71748d',
            }
        }],
        yAxes: [{
            ticks: {
                fontSize: 14,
                fontFamily: 'Circular Std Book',
                fontColor: '#71748d',
            }
        }]
    }
};

var ctx = document.getElementById("stock_chart").getContext('2d');
var stock_chart = new Chart(ctx, {
    type: 'line',
    data: data_3m,
    options: options
});

$("#3m").on("click", function() {
    if (stock_chart) {
        stock_chart.destroy();
    }
    ctx = document.getElementById("stock_chart").getContext('2d');
    stock_chart = new Chart(ctx, {
        type: 'line',
        data: data_3m,
        options: options
    });
});
$("#6m").on("click", function() {
    if (stock_chart) {
        stock_chart.destroy();
    }
    ctx = document.getElementById("stock_chart").getContext('2d');
    stock_chart = new Chart(ctx, {
        type: 'line',
        data: data_6m,
        options: options
    });
});
$("#1y").on("click", function() {
    if (stock_chart) {
        stock_chart.destroy();
    }
    ctx = document.getElementById("stock_chart").getContext('2d');
    stock_chart = new Chart(ctx, {
        type: 'line',
        data: data_1y,
        options: options
    });
});
$("#3y").on("click", function() {
    if (stock_chart) {
        stock_chart.destroy();
    }
    ctx = document.getElementById("stock_chart").getContext('2d');
    stock_chart = new Chart(ctx, {
        type: 'line',
        data: data_3y,
        options: options
    });
});
$("#5y").on("click", function() {
    if (stock_chart) {
        stock_chart.destroy();
    }
    ctx = document.getElementById("stock_chart").getContext('2d');
    stock_chart = new Chart(ctx, {
        type: 'line',
        data: data_5y,
        options: options
    });
});