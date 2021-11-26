import * as echarts from '../../ec-canvas/echarts';
let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var data = [
    {
      name: "Grandpa",
      children: [
        {
          name: "Uncle Leo",
          value: 15,
          children: [
            {
              name: "Cousin Jack",
              value: 2,
            },
            {
              name: "Cousin Mary",
              value: 5,
              children: [
                {
                  name: "Jackson",
                  value: 2,
                },
              ],
            },
            {
              name: "Cousin Ben",
              value: 4,
            },
          ],
        },
        {
          name: "Father",
          value: 10,
          children: [
            {
              name: "Me",
              value: 5,
            },
            {
              name: "Brother Peter",
              value: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Nancy",
      children: [
        {
          name: "Uncle Nike",
          children: [
            {
              name: "Cousin Betty",
              value: 1,
            },
            {
              name: "Cousin Jenny",
              value: 2,
            },
          ],
        },
      ],
    },
  ];
  let option = {
    series: {
      type: "sunburst",
      // emphasis: {
      //     focus: 'ancestor'
      // },
      data: data,
      radius: [0, "90%"],
      label: {
        rotate: "radial",
      },
    },
  };


  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});
