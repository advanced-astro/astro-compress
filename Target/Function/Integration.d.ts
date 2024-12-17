import type Action from "@playform/pipe/Target/Interface/Action.js";
import type Interface from "../Interface/Integration.js";
/**
 * @module Integration
 *
 */
export declare let System: string;
declare const _default: Interface;
export default _default;
export declare const Default: {
    Cache: {
        Search: string;
        Folder: string;
    };
    Path: string;
    Logger: 2;
    Action: {
        Read: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Wrote: ({ Buffer }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<import("@playform/pipe/Target/Type/Buffer.js").Type>;
        Passed: (On: import("@playform/pipe/Target/Interface/File.js").default) => Promise<true>;
        Failed: ({ Input }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Accomplished: ({ Input, Output }: import("@playform/pipe/Target/Interface/File.js").default) => Promise<string>;
        Fulfilled: ({ File }: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<string | false>;
        Changed: (Plan: import("@playform/pipe/Target/Interface/Plan.js").default) => Promise<import("@playform/pipe/Target/Interface/Plan.js").default>;
    };
    File: string;
    Exclude: false;
};
export declare const Search: string;
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
    DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
}>, Readonly<{
    key: PropertyKey;
    parents: ReadonlyArray<Readonly<Record<PropertyKey, unknown>>>;
}>>;
export declare let _Action: Action;
