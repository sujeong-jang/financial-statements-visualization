$(function() {
    "use strict";

    $("#sparkline-revenue000270").sparkline(week_data[0], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#c21a30',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue000660").sparkline(week_data[1], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ffc600',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue005380").sparkline(week_data[2], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#00a9e0',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue005930").sparkline(week_data[3], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#1428a0',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true,
    });

    $("#sparkline-revenue006400").sparkline(week_data[4], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#55efc4',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue035420").sparkline(week_data[5], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#5ecc62',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue035720").sparkline(week_data[6], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#fab1a0',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue051910").sparkline(week_data[7], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#a29bfe',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true,
    });

    $("#sparkline-revenue068270").sparkline(week_data[8], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#ef9421',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });

    $("#sparkline-revenue207940").sparkline(week_data[9], {
        type: 'line',
        width: '99.5%',
        height: '100',
        lineColor: '#c57acf',
        fillColor: '',
        lineWidth: 2,
        spotColor: undefined,
        minSpotColor: undefined,
        maxSpotColor: undefined,
        highlightSpotColor: undefined,
        highlightLineColor: undefined,
        resize:true
    });
    // ==============================================================
    // Chart Balance Bar
    // ==============================================================

    var data_roe_sssk = {
        labels: yearlist,
        datasets: [{
            label: '삼성전자',
            data: roa['ss'],
            backgroundColor: "rgba(20, 40, 160,.8)",
            borderColor: "rgba(20, 40, 160,1)",
            borderWidth:2

        }, {
            label: 'SK하이닉스',
            data: roa['sk'],
            backgroundColor: "rgba(255, 198, 0,.8)",
            borderColor: "rgba(255, 198, 0,1)",
            borderWidth:2
        }]
    };

    var data_roe_naka = {
        labels: yearlist,
        datasets: [{
            label: 'NAVER',
            data: roa['na'],
            backgroundColor: "rgba(94, 204, 98,.8)",
            borderColor: "rgba(94, 204, 98,1)",
            borderWidth:2

        }, {
            label: '카카오',
            data: roa['ka'],
            backgroundColor: "rgba(250, 177, 160,.8)",
            borderColor: "rgba(250, 177, 160,1)",
            borderWidth:2
        }]
    };

    var data_roe_sbce = {
        labels: yearlist,
        datasets: [{
            label: '삼성바이오로직스',
            data: roa['sb'],
            backgroundColor: "rgba(197, 122, 207,.8)",
            borderColor: "rgba(197, 122, 207,1)",
            borderWidth:2

        }, {
            label: '셀트리온',
            data: roa['ce'],
            backgroundColor: "rgba(239, 148, 33,.8)",
            borderColor: "rgba(239, 148, 33,1)",
            borderWidth:2
        }]
    };

    var data_roe_hdki = {
        labels: yearlist,
        datasets: [{
            label: '현대차',
            data: roa['hd'],
            backgroundColor: "rgba(0, 169, 224,.8)",
            borderColor: "rgba(0, 169, 224,1)",
            borderWidth:2

        }, {
            label: '기아차',
            data: roa['ki'],
            backgroundColor: "rgba(194, 26, 48,.8)",
            borderColor: "rgba(194, 26, 48,1)",
            borderWidth:2
        }]
    };

    var data_debt_sssk = {
        labels: yearlist,
        datasets: [{
            label: '삼성전자',
            data: debt['ss'],
            backgroundColor: "rgba(20, 40, 160,.8)",
            borderColor: "rgba(20, 40, 160,1)",
            borderWidth:2

        }, {
            label: 'SK하이닉스',
            data: debt['sk'],
            backgroundColor: "rgba(255, 198, 0,.8)",
            borderColor: "rgba(255, 198, 0,1)",
            borderWidth:2
        }]
    };

    var data_debt_naka = {
        labels: yearlist,
        datasets: [{
            label: 'NAVER',
            data: debt['na'],
            backgroundColor: "rgba(94, 204, 98,.8)",
            borderColor: "rgba(94, 204, 98,1)",
            borderWidth:2

        }, {
            label: '카카오',
            data: debt['ka'],
            backgroundColor: "rgba(250, 177, 160,.8)",
            borderColor: "rgba(250, 177, 160,1)",
            borderWidth:2
        }]
    };

    var data_debt_sbce = {
        labels: yearlist,
        datasets: [{
            label: '삼성바이오로직스',
            data: debt['sb'],
            backgroundColor: "rgba(197, 122, 207,.8)",
            borderColor: "rgba(197, 122, 207,1)",
            borderWidth:2

        }, {
            label: '셀트리온',
            data: debt['ce'],
            backgroundColor: "rgba(239, 148, 33,.8)",
            borderColor: "rgba(239, 148, 33,1)",
            borderWidth:2
        }]
    };

    var data_debt_hdki = {
        labels: yearlist,
        datasets: [{
            label: '현대차',
            data: debt['hd'],
            backgroundColor: "rgba(0, 169, 224,.8)",
            borderColor: "rgba(0, 169, 224,1)",
            borderWidth:2

        }, {
            label: '기아차',
            data: debt['ki'],
            backgroundColor: "rgba(194, 26, 48,.8)",
            borderColor: "rgba(194, 26, 48,1)",
            borderWidth:2
        }]
    };

    var data_ni_sssk = {
        labels: yearlist,
        datasets: [{
            label: '삼성전자',
            data: ni['ss'],
            backgroundColor: "rgba(20, 40, 160,.8)",
            borderColor: "rgba(20, 40, 160,1)",
            borderWidth:2

        }, {
            label: 'SK하이닉스',
            data: ni['sk'],
            backgroundColor: "rgba(255, 198, 0,.8)",
            borderColor: "rgba(255, 198, 0,1)",
            borderWidth:2
        }]
    };

    var data_ni_naka = {
        labels: yearlist,
        datasets: [{
            label: 'NAVER',
            data: ni['na'],
            backgroundColor: "rgba(94, 204, 98,.8)",
            borderColor: "rgba(94, 204, 98,1)",
            borderWidth:2

        }, {
            label: '카카오',
            data: ni['ka'],
            backgroundColor: "rgba(250, 177, 160,.8)",
            borderColor: "rgba(250, 177, 160,1)",
            borderWidth:2
        }]
    };

    var data_ni_sbce = {
        labels: yearlist,
        datasets: [{
            label: '삼성바이오로직스',
            data: ni['sb'],
            backgroundColor: "rgba(197, 122, 207,.8)",
            borderColor: "rgba(197, 122, 207,1)",
            borderWidth:2

        }, {
            label: '셀트리온',
            data: ni['ce'],
            backgroundColor: "rgba(239, 148, 33,.8)",
            borderColor: "rgba(239, 148, 33,1)",
            borderWidth:2
        }]
    };

    var data_ni_hdki = {
        labels: yearlist,
        datasets: [{
            label: '현대차',
            data: ni['hd'],
            backgroundColor: "rgba(0, 169, 224,.8)",
            borderColor: "rgba(0, 169, 224,1)",
            borderWidth:2

        }, {
            label: '기아차',
            data: ni['ki'],
            backgroundColor: "rgba(194, 26, 48,.8)",
            borderColor: "rgba(194, 26, 48,1)",
            borderWidth:2
        }]
    };

    var data_atr_sssk = {
        labels: yearlist,
        datasets: [{
            label: '삼성전자',
            data: atr['ss'],
            backgroundColor: "rgba(20, 40, 160,.8)",
            borderColor: "rgba(20, 40, 160,1)",
            borderWidth:2

        }, {
            label: 'SK하이닉스',
            data: atr['sk'],
            backgroundColor: "rgba(255, 198, 0,.8)",
            borderColor: "rgba(255, 198, 0,1)",
            borderWidth:2
        }]
    };

    var data_atr_naka = {
        labels: yearlist,
        datasets: [{
            label: 'NAVER',
            data: atr['na'],
            backgroundColor: "rgba(94, 204, 98,.8)",
            borderColor: "rgba(94, 204, 98,1)",
            borderWidth:2

        }, {
            label: '카카오',
            data: atr['ka'],
            backgroundColor: "rgba(250, 177, 160,.8)",
            borderColor: "rgba(250, 177, 160,1)",
            borderWidth:2
        }]
    };

    var data_atr_sbce = {
        labels: yearlist,
        datasets: [{
            label: '삼성바이오로직스',
            data: atr['sb'],
            backgroundColor: "rgba(197, 122, 207,.8)",
            borderColor: "rgba(197, 122, 207,1)",
            borderWidth:2

        }, {
            label: '셀트리온',
            data: atr['ce'],
            backgroundColor: "rgba(239, 148, 33,.8)",
            borderColor: "rgba(239, 148, 33,1)",
            borderWidth:2
        }]
    };

    var data_atr_hdki = {
        labels: yearlist,
        datasets: [{
            label: '현대차',
            data: atr['hd'],
            backgroundColor: "rgba(0, 169, 224,.8)",
            borderColor: "rgba(0, 169, 224,1)",
            borderWidth:2

        }, {
            label: '기아차',
            data: atr['ki'],
            backgroundColor: "rgba(194, 26, 48,.8)",
            borderColor: "rgba(194, 26, 48,1)",
            borderWidth:2
        }]
    };


    var options = {
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

    var ctx = document.getElementById("ssskChart").getContext('2d');
    var ssskChart = new Chart(ctx, {
        type: 'bar',
        data: data_roe_sssk,
        options: options
    });

    var ctx = document.getElementById("nakaChart").getContext('2d');
    var nakaChart = new Chart(ctx, {
        type: 'bar',
        data: data_roe_naka,
        options: options
    });

    var ctx = document.getElementById("sbceChart").getContext('2d');
    var sbceChart = new Chart(ctx, {
        type: 'bar',
        data: data_roe_sbce,
        options: options
    });

    var ctx = document.getElementById("hdkiChart").getContext('2d');
    var hdkiChart = new Chart(ctx, {
        type: 'bar',
        data: data_roe_hdki,
        options: options
    });

    $("#bt_roe_sssk").on("click", function() {
        if (ssskChart) {
            ssskChart.destroy();
        }
        ctx = document.getElementById("ssskChart").getContext('2d');
        ssskChart = new Chart(ctx, {
            type: 'bar',
            data: data_roe_sssk,
            options: options
        });
    });
    $("#bt_debt_sssk").on("click", function() {
        if (ssskChart) {
            ssskChart.destroy();
        }
        ctx = document.getElementById("ssskChart").getContext('2d');
        ssskChart = new Chart(ctx, {
            type: 'bar',
            data: data_debt_sssk,
            options: options
        });
    });
    $("#bt_ni_sssk").on("click", function() {
        if (ssskChart) {
            ssskChart.destroy();
        }
        ctx = document.getElementById("ssskChart").getContext('2d');
        ssskChart = new Chart(ctx, {
            type: 'bar',
            data: data_ni_sssk,
            options: options
        });
    });
    $("#bt_atr_sssk").on("click", function() {
        if (ssskChart) {
            ssskChart.destroy();
        }
        ctx = document.getElementById("ssskChart").getContext('2d');
        ssskChart = new Chart(ctx, {
            type: 'bar',
            data: data_atr_sssk,
            options: options
        });
    });


    $("#bt_roe_naka").on("click", function() {
        if (nakaChart) {
            nakaChart.destroy();
        }
        ctx = document.getElementById("nakaChart").getContext('2d');
        nakaChart = new Chart(ctx, {
            type: 'bar',
            data: data_roe_naka,
            options: options
        });
    });
    $("#bt_debt_naka").on("click", function() {
        if (nakaChart) {
            nakaChart.destroy();
        }
        ctx = document.getElementById("nakaChart").getContext('2d');
        nakaChart = new Chart(ctx, {
            type: 'bar',
            data: data_debt_naka,
            options: options
        });
    });
    $("#bt_ni_naka").on("click", function() {
        if (nakaChart) {
            nakaChart.destroy();
        }
        ctx = document.getElementById("nakaChart").getContext('2d');
        nakaChart = new Chart(ctx, {
            type: 'bar',
            data: data_ni_naka,
            options: options
        });
    });
    $("#bt_atr_naka").on("click", function() {
        if (nakaChart) {
            nakaChart.destroy();
        }
        ctx = document.getElementById("nakaChart").getContext('2d');
        nakaChart = new Chart(ctx, {
            type: 'bar',
            data: data_atr_naka,
            options: options
        });
    });


    $("#bt_roe_sbce").on("click", function() {
        if (sbceChart) {
            sbceChart.destroy();
        }
        ctx = document.getElementById("sbceChart").getContext('2d');
        sbceChart = new Chart(ctx, {
            type: 'bar',
            data: data_roe_sbce,
            options: options
        });
    });
    $("#bt_debt_sbce").on("click", function() {
        if (sbceChart) {
            sbceChart.destroy();
        }
        ctx = document.getElementById("sbceChart").getContext('2d');
        sbceChart = new Chart(ctx, {
            type: 'bar',
            data: data_debt_sbce,
            options: options
        });
    });
    $("#bt_ni_sbce").on("click", function() {
        if (sbceChart) {
            sbceChart.destroy();
        }
        ctx = document.getElementById("sbceChart").getContext('2d');
        sbceChart = new Chart(ctx, {
            type: 'bar',
            data: data_ni_sbce,
            options: options
        });
    });
    $("#bt_atr_sbce").on("click", function() {
        if (sbceChart) {
            sbceChart.destroy();
        }
        ctx = document.getElementById("sbceChart").getContext('2d');
        sbceChart = new Chart(ctx, {
            type: 'bar',
            data: data_atr_sbce,
            options: options
        });
    });


    $("#bt_roe_hdki").on("click", function() {
        if (hdkiChart) {
            hdkiChart.destroy();
        }
        ctx = document.getElementById("hdkiChart").getContext('2d');
        hdkiChart = new Chart(ctx, {
            type: 'bar',
            data: data_roe_hdki,
            options: options
        });
    });
    $("#bt_debt_hdki").on("click", function() {
        if (hdkiChart) {
            hdkiChart.destroy();
        }
        ctx = document.getElementById("hdkiChart").getContext('2d');
        hdkiChart = new Chart(ctx, {
            type: 'bar',
            data: data_debt_hdki,
            options: options
        });
    });
    $("#bt_ni_hdki").on("click", function() {
        if (hdkiChart) {
            hdkiChart.destroy();
        }
        ctx = document.getElementById("hdkiChart").getContext('2d');
        hdkiChart = new Chart(ctx, {
            type: 'bar',
            data: data_ni_hdki,
            options: options
        });
    });
    $("#bt_atr_hdki").on("click", function() {
        if (hdkiChart) {
            hdkiChart.destroy();
        }
        ctx = document.getElementById("hdkiChart").getContext('2d');
        hdkiChart = new Chart(ctx, {
            type: 'bar',
            data: data_atr_hdki,
            options: options
        });
    });


});