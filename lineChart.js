import React, { Component } from 'react'
import { VictoryChart, Line, VictoryAxis, VictoryArea, VictoryScatter, VictoryTheme } from 'victory-native';
import Svg from 'react-native-svg';


const data = [
    { day: '19/09', view: 6 },
    { day: '20/09', view: 3 },
    { day: '21/09', view: 5 },
    { day: '22/09', view: 4 },
    { day: '23/09', view: 8 },
    { day: '24/09', view: 2 },
    { day: '25/09', view: 11 }
]

export default class LineChartTest extends Component {

    render() {
        const axisOption = {
            axis: { stroke: "#7f7f7f", strokeWidth: 0.1 },
            ticks: { size: 0 }
        }
        const gridOption = { strokeWidth: 0.1, fillOpacity: 0.15, color: '#7f7f7f' }

        return (
            //just wrap in Svg tag to fix bug: https://github.com/FormidableLabs/victory-native/issues/254
            <Svg
                width={Styles.width}
                height={210}
                style={{ width: "100%", height: "auto" }}>
                <VictoryChart
                    theme={VictoryTheme.material}
                    height={210}
                    padding={{ top: 10, bottom: 50, left: 35, right: 40 }}>
                    <VictoryScatter
                        data={data}
                        x={'day'}
                        y={'view'}
                        samples={data.length}
                        size={3}
                        style={{
                            data: { fill: "#7f7f7f" },
                            labels: {
                                fontSize: 17,
                                padding: 10,
                                fontWeight: 'bold',
                                fill: '#e46600'
                            }
                        }}
                        events={[
                            {
                                target: 'data',
                                eventHandlers: {
                                    onPress: () => {
                                        alert("onPress");
                                    },
                                }
                            }
                        ]}
                    />
                    <VictoryAxis
                        gridComponent={<Line style={gridOption} />}
                        style={axisOption}
                        tickFormat={(t) => {
                            return t
                        }}
                    />
                    <VictoryAxis
                        style={axisOption}
                        dependentAxis
                        gridComponent={<Line style={gridOption} />}
                        tickFormat={(t) => `${Math.round(t)}`}
                        tickCount={4}
                    />
                    <VictoryArea
                        style={{
                            data: {
                                fill: "#074e8e", fillOpacity: 0.15, stroke: "#7f7f7f", strokeWidth: 2
                            },
                        }}
                        data={data}
                        x={'day'}
                        y={'view'}
                    />
                </VictoryChart >
            </Svg>
        )
    }
}
