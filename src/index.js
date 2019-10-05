/* eslint-disable */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _has from 'lodash/has';
import NgagerDateField from 'ngager-datepicker';

class NgagerDateRangePicker extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fromDate: _get(props.initialValue, 'fromDate', null),
      toDate: _get(props.initialValue, 'toDate', null),
    };
    this.handleOnChangeToDate = this.handleOnChangeToDate.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { fromDate, toDate } = this.state;
    if (prevState.fromDate !== fromDate || prevState.toDate !== toDate) {
      this.props.onChange({ fromDate, toDate });
    }
  }

  handleOnChangeToDate(toDate) {
    toDate.setHours(23);
    toDate.setMinutes(59);
    toDate.setSeconds(59);
    this.setState({ toDate });
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <div className="ngager-flexbox-container">
          <div className="ngager-half">
            <NgagerDateField
              initialValue={this.state.fromDate}
              className={_has(this.props.error, 'fields.fromDate') ? 'error' : ''}
              minDate={this.props.minDate}
              maxDate={this.state.maxDate}
              placeholder="From date"
              onChange={fromDate => this.setState({ fromDate })}
            />
          </div>
          <div className="ngager-half">
            <NgagerDateField
              initialValue={this.state.toDate}
              className={_has(this.props.error, 'fields.toDate') ? 'error' : ''}
              minDate={this.state.fromDate}
              maxDate={this.props.maxDate}
              placeholder="To date"
              onChange={this.handleOnChangeToDate}
            />
          </div>
        </div>
        {_has(this.props.error, 'message') && (
          <span className="error-text">{this.props.error.message}</span>
        )}
      </div>
    );
  }
}

NgagerDateRangePicker.propTypes = {
  initialValue: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  error: PropTypes.instanceOf(Object),
  style: PropTypes.instanceOf(Object),
  minDate: PropTypes.instanceOf(Object),
  maxDate: PropTypes.instanceOf(Object),
  onChange: PropTypes.func,
};

NgagerDateRangePicker.defaultProps = {
  initialValue: null,
  className: '',
  style: {},
  minDate: null,
  maxDate: null,
  error: {},
  onChange: () => null,
};

export default NgagerDateRangePicker;
