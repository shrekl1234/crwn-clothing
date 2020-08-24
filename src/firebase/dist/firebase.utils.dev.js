"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/firestore");

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var config = {
  apiKey: "AIzaSyCMvqdh0k_JovcWkTbHQBD87AabfoCm_4Q",
  authDomain: "crown-db-d71df.firebaseapp.com",
  databaseURL: "https://crown-db-d71df.firebaseio.com",
  projectId: "crown-db-d71df",
  storageBucket: "crown-db-d71df.appspot.com",
  messagingSenderId: "579509201843",
  appId: "1:579509201843:web:5da8994c4e041765db39c6",
  measurementId: "G-XTMLWGGJF0"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  promt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;