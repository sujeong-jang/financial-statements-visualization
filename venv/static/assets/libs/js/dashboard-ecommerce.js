
///////

    var ctx = document.getElementById("chartjs_balance_bar").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',


            data: {
                labels: ["2016", "2017", "2018", "2019", "2020"],
                datasets: [{
                    label: '매출액',
                    data: TAKE,
                    backgroundColor: "rgba(89, 105, 255,.8)",
                    borderColor: "rgba(89, 105, 255,1)",
                    borderWidth:2

                }, {
                    label: '영업이익',
                    data: OPERATING_PROFIT,
                    backgroundColor: "rgba(255, 64, 123,.8)",
                    borderColor: "rgba(255, 64, 123,1)",
                    borderWidth:2


                }, {
                    label: '당기순이익',
                    data: NET_INCOME,
                    backgroundColor: "rgba(205, 220, 57,.8)",
                    borderColor: "rgba(205, 220, 57,1)",
                    borderWidth:2


                }]

            },
            options: {
                legend: {
                        display: true,

                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily:'Circular Std Book',
                            fontSize: 14,
                        }
                },

                    scales: {
                        xAxes: [{
                    ticks: {
                        fontSize: 14,
                         fontFamily:'Circular Std Book',
                         fontColor: '#71748d',
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 14,
                         fontFamily:'Circular Std Book',
                         fontColor: '#71748d',
                    }
                }]
                    }
        }



    });

////



///

    var ctx = document.getElementById("chartjs_bar2").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',


            data: {
                labels: ["2016", "2017", "2018", "2019", "2020"],
                datasets: [{
                    label: '자산총계',
                    data: TOTAL_ASSETS,
                    backgroundColor: "rgba(89, 105, 255,.8)",
                    borderColor: "rgba(89, 105, 255,1)",
                    borderWidth:2

                }, {
                    label: '부채총계',
                    data: TOTAL_LIABILITIES,
                    backgroundColor: "rgba(255, 64, 123,.8)",
                    borderColor: "rgba(255, 64, 123,1)",
                    borderWidth:2


                }, {
                    label: '자본총계',
                    data: TOTAL_EQUITY,
                    backgroundColor: "rgba(205, 220, 57,.8)",
                    borderColor: "rgba(205, 220, 57,1)",
                    borderWidth:2


                }]

            },
            options: {
                legend: {
                        display: true,

                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily:'Circular Std Book',
                            fontSize: 14,
                        }
                },

                    scales: {
                        xAxes: [{
                    ticks: {
                        fontSize: 14,
                         fontFamily:'Circular Std Book',
                         fontColor: '#71748d',
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 14,
                         fontFamily:'Circular Std Book',
                         fontColor: '#71748d',
                    }
                }]
                    }
        }



    });

 ///

     var ctx = document.getElementById("chartjs_bar3").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',


            data: {
                labels: ["2016", "2017", "2018", "2019", "2020"],
                datasets: [{
                    label: '영업활동 현금흐름',
                    data: CF_OPERATING,
                    backgroundColor: "rgba(89, 105, 255,.8)",
                    borderColor: "rgba(89, 105, 255,1)",
                    borderWidth:2

                }, {
                    label: '투자활동 현금흐름',
                    data: CF_INVESTING,
                    backgroundColor: "rgba(255, 64, 123,.8)",
                    borderColor: "rgba(255, 64, 123,1)",
                    borderWidth:2


                }, {
                    label: '재무활동 현금흐름',
                    data: CF_FINANCING,
                    backgroundColor: "rgba(205, 220, 57,.8)",
                    borderColor: "rgba(205, 220, 57,1)",
                    borderWidth:2


                }]

            },
            options: {
                legend: {
                        display: true,

                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily:'Circular Std Book',
                            fontSize: 14,
                        }
                },

                    scales: {
                        xAxes: [{
                    ticks: {
                        fontSize: 14,
                         fontFamily:'Circular Std Book',
                         fontColor: '#71748d',
                    }
                }],
                yAxes: [{
                    ticks: {
                        fontSize: 14,
                         fontFamily:'Circular Std Book',
                         fontColor: '#71748d',
                    }
                }]
                    }
        }



    });