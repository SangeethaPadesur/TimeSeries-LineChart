import React from 'react'
import '@scuf/common/honeywell/theme.css'
import '@scuf/common/honeywell-compact/theme.css'
import './App.css';
import { TimeSeries } from '@scuf/charts';
import { testData } from './testData';


const App =()=>{
  return(
      <TimeSeries >
      <TimeSeries.Line
        name={'test'}
        data={testData as any}
        showTooltips={false}
        enableMouseTracking={true}
        lineWidth={1}
      />
      </TimeSeries>
  )
}
export default App 