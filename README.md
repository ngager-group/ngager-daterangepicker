# ngager-daterangepicker

> ReactJS Date Range Picker component

[![NPM](https://img.shields.io/npm/v/ngager-daterangepicker.svg)](https://www.npmjs.com/package/ngager-daterangepicker) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ngager-daterangepicker
```

## Usage

```jsx
import React, { Component } from 'react'

import NgagerDateRangePicker from 'ngager-daterangepicker'

class Example extends Component {
  render () {
    return (
      <NgagerDateRangePicker
        initialValue={{ fromDate, toDate }}
        className="row"
        onChange={this.handleOnChangeDate}
        error={this.state.dateValidator}
      />
    )
  }
}
```

## License

MIT © [ngager-group](https://github.com/ngager-group)
