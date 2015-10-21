// 'use strict';
//
// import { React, TestUtils, defaultProps, expect, chai, spies } from '../config';
//
// const CompactFieldsComponent = require('../../src/components/compact/CompactFields');
//
// let props;
//
// describe('CompactFields', () => {
//
//   beforeEach(() => {
//     props = defaultProps;
//   });
//
//   it('should fire handleChange when the hex input is changed', () => {
//     props.onClick = chai.spy((data) => {
//       console.log('FOO');
//       expect(data).to.equal({ hex: '#fff214124' });
//     });
//     const CompactFields = TestUtils.renderIntoDocument(<CompactFieldsComponent {...props} />);
//     let hex = CompactFields.refs.hex;
//     TestUtils.Simulate.change(hex, { value: '#fff' });
//
//     // expect(props.onClick).to.have.been.called;
//   });
//
//   it('should fire handleChange when the r input is changed', () => {
//     props.onClick = chai.spy((data) => {
//       expect(data).to.equal({ r: 99, g: props.rgb.g, b: props.rgb.b });
//     });
//     const CompactFields = TestUtils.renderIntoDocument(<CompactFieldsComponent {...props} />);
//     let r = CompactFields.refs.r;
//     TestUtils.Simulate.change(r, { value: 99 });
//
//     // expect(props.onClick).to.have.been.called;
//   });
//
// });
