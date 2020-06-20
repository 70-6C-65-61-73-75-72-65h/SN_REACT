import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
// ряд тестов которые логично обьеденяются в одну группу 

describe("ProfileStatus component", () => {

  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="status" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("status");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="status" />);
    const root = component.root;
    let span;

    expect(() => {span = root.findByType('span')}).not.toThrow();
    expect(span).not.toBeNull();
  });

  test("after creation <input> should not be displayed", () => {
    const component = create(<ProfileStatus status="status" />);
    const root = component.root;

    expect(() => {root.findByType('input')}).toThrow();
  });

  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="status" />);
    const root = component.root;
    let span;

    expect(() => {span = root.findByType('span')}).not.toThrow();
    expect(span.children[0]).toBe("status");
  });

  test("<input> should be displayed in editMode instead <span>", () => {
    const component = create(<ProfileStatus status="status" />);
    const root = component.root;
    let span, input;

    expect(() => {span = root.findByType('span')}).not.toThrow();
    expect(() => {span.props.onDoubleClick()}).not.toThrow();
    expect(() => {input = root.findByType('input')}).not.toThrow(); 
    expect(input.props.value).toBe("status");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn((status) => status); 
    //  подменили функцию this.props.updateStatus с аргами при вызове (this.state.status); на mockCallback и словили отсутствие ее вызова из классовой компоненты
    const component = create(<ProfileStatus status="status" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactiveEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
   
});
