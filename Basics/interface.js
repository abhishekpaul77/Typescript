"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paul = { _id: 69, email: "abc@.com", userId: 69, startTrial: function () {
        return "Trial started";
    }, getCoupon: function (coupon, val) {
        if (coupon === void 0) { coupon = "Discount"; }
        if (val === void 0) { val = 10; }
        return 10;
    }, githubId: 96 };
paul.email = "paul@.com";
var paulAdmin = { _id: 69, email: "abc@.com", userId: 69, startTrial: function () {
        return "Trial started";
    }, getCoupon: function (coupon, val) {
        if (coupon === void 0) { coupon = "Discount"; }
        if (val === void 0) { val = 10; }
        return 10;
    }, githubId: 96,
    adminRole: "Head", };
