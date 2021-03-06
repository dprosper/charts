import { symbols } from '../constants';

export type XAxisProps = echarts.EChartOption.XAxis & {
  axisLine?: echarts.EChartOption.XAxis['axisLine'] | boolean;
  axisLabel?: echarts.EChartOption.XAxis['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: echarts.EChartOption.XAxis['splitLine'] | boolean;
};

function XAxis(_: XAxisProps) {
  return null;
}

XAxis[symbols.typeKey] = symbols.xAxis;

if (__DEV__) {
  XAxis.displayName = 'XAxis';
}

export default XAxis;
