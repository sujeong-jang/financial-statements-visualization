(function(window, document, $, undefined) {
        "use strict";
        $(function() {
            if ($('#chartjs_bar1').length) {
                var ctx = document.getElementById("chartjs_bar1").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: JS_DATE_LIST,
                        datasets: [{
                            label: 'ROA(총자산순이익률)',
                            data: JS_ROA_LIST,
                           backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                            borderWidth: 2
                        }, {
                            label: '매출액총이익률',
                            data: JS_PROFIT_LIST,
                           backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                            borderWidth: 2
                        },
                        {
                            label: '영업이익률',
                            data: JS_OPER_LIST,
                           backgroundColor: "rgba(113, 204, 88,0.5)",
                                    borderColor: "rgba(113, 170, 88,0.7)",
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{

                            }]
                        },
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
                }
                });
            }
             if ($('#chartjs_bar2').length) {
                var ctx = document.getElementById("chartjs_bar2").getContext('2d');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: JS_DATE_LIST,
                        datasets: [{
                            label: '유동비율',
                            data: JS_CUR_LIST,
                           backgroundColor: "rgba(89, 105, 255,0.5)",
                                    borderColor: "rgba(89, 105, 255,0.7)",
                            borderWidth: 2
                        }, {
                            label: '부채비율',
                            data: JS_DEBT_LIST,
                           backgroundColor: "rgba(255, 64, 123,0.5)",
                                    borderColor: "rgba(255, 64, 123,0.7)",
                            borderWidth: 2
                        },
                        {
                            label: '자기자본비율',
                            data: JS_FIN_LIST,
                           backgroundColor: "rgba(113, 204, 88,0.5)",
                                    borderColor: "rgba(113, 170, 88,0.7)",
                            borderWidth: 2
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{

                            }]
                        },
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
                }
                });
             }

             if ($('#chartjs_radar').length) {
                var ctx = document.getElementById("chartjs_radar");
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ["영업이익률", "ROE", "매출액총이익률"],
                        datasets: [{
                            label: JS_NAME,
                           backgroundColor: "rgba(76,175,80,0.5)",
                                    borderColor: "rgba(76,175,80,0.7)",
                            data: JS_G_RADAR_LIST,
                            borderWidth: 2
                        }, {
                            label: '양호',
                             backgroundColor: "rgba(3,169,244,0.5)",
                                    borderColor: "rgba(3,169,244,0.7)",
                            data: G_GOOD,
                            borderWidth: 2
                        }, {
                            label: '위험',
                           backgroundColor: "rgba(244,67,54,0.5)",
                                    borderColor: "rgba(244,67,54,0.7)",
                            data: G_BAD,
                            borderWidth: 2
                        }]
                    },
                    options: {

                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },


                }

                });
             }

             if ($('#chartjs_radar2').length) {
                var ctx = document.getElementById("chartjs_radar2");
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: ["유동비율", "부채비율", "자기자본비율","당좌비율"],
                        datasets: [{
                            label: JS_NAME,
                           backgroundColor: "rgba(76,175,80,0.5)",
                                    borderColor: "rgba(76,175,80,0.7)",
                            data: JS_S_RADAR_LIST,
                            borderWidth: 2
                        }, {
                            label: '양호',
                             backgroundColor: "rgba(3,169,244,0.5)",
                                    borderColor: "rgba(3,169,244,0.7)",
                            data: S_GOOD,
                            borderWidth: 2
                        }, {
                            label: '위험',
                           backgroundColor: "rgba(244,67,54,0.5)",
                                    borderColor: "rgba(244,67,54,0.7)",
                            data: S_BAD,
                            borderWidth: 2
                        }]
                    },
                    options: {

                             legend: {
                        display: true,
                        position: 'bottom',

                        labels: {
                            fontColor: '#71748d',
                            fontFamily: 'Circular Std Book',
                            fontSize: 14,
                        }
                    },


                }

                });

            }
        });
})(window, document, window.jQuery);