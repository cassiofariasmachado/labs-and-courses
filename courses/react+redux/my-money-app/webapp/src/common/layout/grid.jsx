import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : [];

        let gridClasses = ['xs', 'sm', 'md', 'lg']
        let classes = '';

        for (let i = 0; i < gridClasses.length; i++) {
            classes += `col-${gridClasses[i]}-${cols[i]} `
        }

        return classes;
    }

    render() {
        return (
            <div className={this.toCssClasses(this.props.cols || '12')}>
                {this.props.children}
            </div>
        )
    }

}