$(document).ready(function () {
  const currentTime = moment().format('YYYY年MM月DD日');
  document.getElementById('currentTime').innerHTML = currentTime;
  document.getElementById('alarmTime').innerHTML = currentTime;

  // $(".roundTrip").one('load', leftUpList())

  // let hasList = false;

  // if (hasList == false) {
  // leftUpList();
  //   hasList = true;
  // }
  listScroll();
  scatterChart();
  popUP();
  personBtn();
  columnChart();
  downloadAndPostBtn();
  // rightDownList()
  postScroll();
});

//動態清單 leftUpList
const leftUpList = () => {
  $.each(leftUpListFakedata, function (index, element) {
    // console.log('index =', index)
    // console.log('element =', element)
    console.log('document =', document);
    // console.log('document.createElement("li") =', document.createElement("li"))
    const data = document.createElement('li');
    // data.innerHTML = element.label;
    data.className = 'list-group-item leftUpList';
    data.append("<span class='leftUpLeft'></span>");
    data.append("<span class='leftUpMiddle'></span>");
    data.append("<span class='leftUpRight'></span>");
    console.log('data =', data);
    document.querySelector('.roundTrip').appendChild(data);
    // $(".roundTrip").html(
    //   $('<li/>')
    //   .addClass("list-group-item leftUpList")
    //   .append(
    //     $('<span/>').addClass('leftUpLeft').html(`${element.left}`)
    //   )
    //   .append(
    //     $('<span/>').addClass('leftUpMiddle').html(`${element.middle}`)
    //   )
    //   .append(
    //     $('<span/>').addClass('leftUpRight').html(`${element.right}`)
    //   )
    // )
    // document.querySelector(".roundTrip").appendChild(data);
  });
};

//清單輪播
const listScroll = () => {
  const timing = () => {
    const height = $('.roundTrip>li:first').outerHeight() - 5;
    $('.roundTrip').animate({ marginTop: -height + 'px' }, 2000, function () {
      $('.roundTrip').css({ marginTop: 0 });
      $('.roundTrip>li:first').appendTo($('.roundTrip'));
    });
  };
  let time = setInterval(timing, 3000);

  //滑鼠移入停止輪巡
  $('.roundTrip').mouseenter(function () {
    clearInterval(time);
  });
  //滑鼠移出繼續輪巡
  $('.roundTrip').mouseleave(function () {
    time = setInterval(timing, 3000);
  });
};

//scatterChart
const scatterChart = () => {
  const chart = new CanvasJS.Chart('scatterChart', {
    backgroundColor: 'rgba(0,0,0,0)',
    animationEnabled: true,
    zoomEnabled: true,
    axisX: {
      labelFontColor: '#ffffff',
      lineColor: '#ffffff',
      gridThickness: 1,
    },
    axisY: {
      suffix: '萬',
      labelFontColor: '#ffffff',
      lineColor: '#ffffff',
    },
    data: [
      {
        type: 'bubble',
        toolTipContent: '<b>{name}</b><br/>Number: {y} 萬',
        dataPoints: leftUpChartFakedata,
      },
    ],
  });
  chart.render();
};

//預警信息推送彈窗
const popUP = () => {
  $('.infoPush .infoPushImg').mouseenter(function () {
    $('.popUp').addClass('popUpShow');
  });
  $('.infoPush .infoPushImg').mouseleave(function () {
    $('.popUp').removeClass('popUpShow');
  });
};

//有無人統計按鈕切換
const personBtn = () => {
  $('#person').click(() => {
    alert('你按了有人統計');
    $('#person').addClass('clickColor');
    $('#noPerson').addClass('unClickColor');
    $('#person').removeClass('unClickColor');
  });
  $('#noPerson').click(() => {
    alert('你按了無人統計');
    $('#person').addClass('unClickColor');
    $('#noPerson').removeClass('unClickColor');
    $('#noPerson').addClass('clickColor');
  });
};

//columnChart
const columnChart = () => {
  // Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

  // Create the chart
  Highcharts.chart('columnChart', {
    chart: {
      type: 'column',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    title: {
      // align: "left",
      text: '',
    },
    //隱藏highcharts標記
    credits: {
      enabled: false,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category',
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      title: {
        text: '',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
      column: {
        borderRadius: 20,
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },

    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: rightChartFakedata,
      },
    ],
  });
};

//下載公告按鈕切換
const downloadAndPostBtn = () => {
  $('#download').click(() => {
    $('#download').addClass('clickColor');
    $('#post').addClass('unClickColor');
    $('#download').removeClass('unClickColor');
    $('#posts').addClass('hide');
    $('#downloads').removeClass('hide');
    $('#downloads').addClass('show');
  });
  $('#post').click(() => {
    $('#download').addClass('unClickColor');
    $('#post').removeClass('unClickColor');
    $('#post').addClass('clickColor');
    $('#downloads').addClass('hide');
    $('#posts').removeClass('hide');
    $('#posts').addClass('show');
  });
};

//檔案下載
const downloadFile = (url, fileName) => {
  fetch(url, { method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer' })
    .then((res) => res.blob())
    .then((res) => {
      const aElement = document.createElement('a');
      aElement.setAttribute('download', fileName);
      const href = URL.createObjectURL(res);
      aElement.href = href;
      // aElement.setAttribute('href', href);
      aElement.setAttribute('target', '_blank');
      aElement.click();
      URL.revokeObjectURL(href);
    });
};
document.querySelector('.fileBtn').onclick = function () {
  downloadFile(
    'https://www.google-analytics.com/analytics.js',
    'gooleAnalytics.js'
  );
};

//動態清單 rightDownList
const rightDownList = () => {
  $.each(leftUpListFakedata, function (index, element) {
    // console.log('index =', index)
    // console.log('element =', element)
    const data = document.createElement('li');
    data.innerHTML = element.label;
    data.className = 'list-group-item rightDownList';
    document.querySelector('.rightDownList').appendChild(data);
  });
};

//公告輪播
const postScroll = () => {
  const timing = () => {
    const height = $('.postsRound>li:first').outerHeight() - 5;
    $('.postsRound').animate(
      { marginTop: -height - 14 + 'px' },
      1000,
      function () {
        $('.postsRound').css({ marginTop: 0 });
        $('.postsRound>li:first').appendTo($('.postsRound'));
      }
    );
  };
  const time = setInterval(timing, 3000);

  //滑鼠移入停止輪巡
  $('.postsRound').mouseenter(function () {
    clearInterval(time);
  });
  //滑鼠移出繼續輪巡
  $('.postsRound').mouseleave(function () {
    time = setInterval(timing, 3000);
  });
};
