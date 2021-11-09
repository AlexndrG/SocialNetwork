import React from 'react';
import TestRenderer from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';


describe('Profile status component', () => {

    test('after creation state.status should contain correct status', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        expect(testInstance.instance.state.status).toBe('test')
    })

    test('after creation <span> should be displayed', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        const span = testInstance.findAllByType('span')
        expect(span.length).toBe(1)
    })
    test('after creation <span> should be displayed (ver 2)', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        const span = testInstance.findByType('span')
        expect(span).not.toBeNull()
    })

    test('after creation <input> should not be displayed', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        const input = testInstance.findAllByType('input')
        expect(input.length).toBe(0)
    })
    test('after creation <input> should not be displayed (ver 2)', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        expect(()=>{
            const input = testInstance.findByType('input')
        }).toThrow()
    })

    test('after creation <span> should contain correct status', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        const span = testInstance.findAllByType('span')
        expect(span[0].children[0]).toBe('test')
    })
    test('after creation <span> should contain correct status (ver 2)', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        const span = testInstance.findByType('span')
        expect(span.children[0]).toBe('test')
    })

    test('<input> should be displayed in editMode instead of <span>', () => {
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={() => {
                }}
            />)
        const testInstance = component.root
        const span = testInstance.findByType('span')
        span.props.onDoubleClick()
        const input = testInstance.findByType('input')
        expect(input).not.toBeNull()
        expect(input.props.value).toBe('test')
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = TestRenderer.create(
            <ProfileStatus
                status={'test'}
                updateStatus={mockCallback}
            />)
        const testInstance = component.root
        testInstance.instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })

})
