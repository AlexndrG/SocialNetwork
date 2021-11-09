import React from 'react';
import TestRenderer from 'react-test-renderer';
import {PaginatorLikeDimych} from './PaginatorLikeDimych';


describe('PaginatorLikeDimych component', () => {

    test('pages count is 11 but should be showed only 10 buttons-divs', () => {
        const component = TestRenderer.create(
            <PaginatorLikeDimych
                totalUserCount={110}
                pageSize={10}
                currentPage={1}
                onPageChanged={() => {
                }}
            />)
        const testInstance = component.root
        const div = testInstance.findAllByType('div')
        expect(div.filter(d => +d.children > 0 && +d.children <= 10).length).toBe(10)
    })

    test('if pages count more than 10 button <Next 10> should be enabled', () => {
        const component = TestRenderer.create(
            <PaginatorLikeDimych
                totalUserCount={110}
                pageSize={10}
                currentPage={1}
                onPageChanged={() => {
                }}
            />)
        const testInstance = component.root
        const button = testInstance.findAllByType('button')
        expect(button.filter(b => b.children[0] === 'Next 10' && b.props.disabled === false).length).toBe(1)
    })
})
