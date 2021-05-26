import React from 'react';
import classnames from 'classnames';

import * as calendarPlate from './calendarPlate';

import './calendarPlate.css';
import Button from "@material-ui/core/Button";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import {MenuItem, TextField} from "@material-ui/core";

export default class CalendarPlate extends React.Component {
    static defaultProps = {
        date: new Date(),
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames: ['Mon', 'Tue', 'Wen', 'Thu' , 'Fri', 'Sat', 'San'],
        onChange: Function.prototype
    };

    state = {
        date: this.props.date,
        currentDate: new Date(),
        selectedDate: null
    };

    get year() {
        return this.state.date.getFullYear();
    }

    get month() {
        return this.state.date.getMonth();
    }

    get day() {
        return this.state.date.getDate();
    }

    handlePrevMonthButtonClick = () => {
        const date = new Date(this.year, this.month - 1);

        this.setState({ date });
    };

    handleNextMonthButtonClick = () => {
        const date = new Date(this.year, this.month + 1);

        this.setState({ date });
    };

    handleMonthSelectChange = (event) => {
        const month = event.target.value;
        const date = new Date(this.year, month);
        this.setState({ date });
    };

    handleYearSelectChange = (event) => {
        const year = event.target.value;
        const date = new Date(year, this.month);
        this.setState({ date });
    };

    handleDayClick = date => {
        this.setState({ selectedDate: date });

        this.props.onChange(date);
    };

    render() {
        const { years, monthNames, weekDayNames } = this.props;
        const { currentDate, selectedDate } = this.state;

        const monthData = calendarPlate.getMonthData(this.year, this.month);

        return (
            <div className="calendarPlate">
                <header>
                    <Button
                        onClick={this.handlePrevMonthButtonClick}
                        startIcon={<NavigateBeforeIcon/>}/>

                    <TextField
                        ref={element => this.monthSelect = element}
                        select
                        value={this.month}
                        onChange={this.handleMonthSelectChange}
                        style={{marginRight: 5}}
                    >
                        {monthNames.map((name, index) =>
                            <MenuItem key={index} value={index}>{name}</MenuItem>
                        )}
                    </TextField>

                    <TextField
                        ref={element => this.yearSelect = element}
                        select
                        value={this.year}
                        onChange={this.handleYearSelectChange}
                        style={{marginLeft: 5}}
                    >
                        {years.map(year =>
                            <MenuItem key={year} value={year}>{year}</MenuItem>
                        )}
                    </TextField>

                    <Button
                        onClick={this.handleNextMonthButtonClick}
                        startIcon={<NavigateNextIcon/>}/>
                </header>

                <table>
                    <thead>
                    <tr>
                        {weekDayNames.map(name =>
                            <th key={name}>{name}</th>
                        )}
                    </tr>
                    </thead>

                    <tbody>
                    {monthData.map((week, index) =>
                        <tr key={index} className="week">
                            {week.map((date, index) => date ?
                                <td
                                    key={index}
                                    className={classnames('day', {
                                        'today': calendarPlate.areEqual(date, currentDate),
                                        'selected': calendarPlate.areEqual(date, selectedDate)
                                    })}
                                    onClick={() => this.handleDayClick(date)}
                                >{date.getDate()}</td>
                                :
                                <td key={index} />
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}
