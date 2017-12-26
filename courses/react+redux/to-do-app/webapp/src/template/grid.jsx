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
        const gridClasses = this.toCssClasses(this.props.cols || 12)

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }

}