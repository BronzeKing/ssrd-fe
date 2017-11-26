import { Route } from "vue-router";
const support = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/index")), "support");
const faqs = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/components/faqs")), "support");
const servicePromise = (r: any) =>
    require.ensure(
        [],
        () => r(require("pages/views/support/components/servicePromise")),
        "support"
    );
const feedback = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/components/feedback")), "support");
const survey = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/components/survey")), "support");
const serviceNet = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/components/serviceNet")), "support");
const opVideo = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/components/opVideo")), "support");
const download = (r: any) =>
    require.ensure([], () => r(require("pages/views/support/components/download")), "support");
export default [
    {
        path: "/support",
        name: "support",
        redirect: "/support/faqs",
        component: support,
        children: [
            {
                path: "faqs",
                component: faqs,
                name: "faqs"
            },
            {
                path: "faqs/:id",
                component: faqs,
                name: "faqsDetail"
            },
            {
                path: "servicePromise",
                component: servicePromise,
                name: "servicePromise"
            },
            {
                path: "feedback",
                component: feedback,
                name: "feedback"
            },
            {
                path: "survey",
                component: survey,
                name: "survey"
            },
            {
                path: "serviceNet",
                component: serviceNet,
                name: "serviceNet"
            },
            {
                path: "download",
                component: download,
                name: "download"
            },
            {
                path: "download/:id",
                component: download,
                name: "downloadDetail"
            },
            {
                path: "opVideo",
                component: opVideo,
                name: "opVideo"
            },
            {
                path: "opVideo/:id",
                component: opVideo,
                name: "opVideoDetail"
            }
        ]
    }
];
