require('babel-register')();

import Enzyme from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });  

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<div id="global"></div>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
