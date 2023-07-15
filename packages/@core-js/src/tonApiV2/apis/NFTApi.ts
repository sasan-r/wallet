/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@tonkeeper.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetAccountsRequest,
  GetBlock401Response,
  NftCollection,
  NftCollections,
  NftItem,
  NftItems,
} from '../models/index';
import {
    GetAccountsRequestFromJSON,
    GetAccountsRequestToJSON,
    GetBlock401ResponseFromJSON,
    GetBlock401ResponseToJSON,
    NftCollectionFromJSON,
    NftCollectionToJSON,
    NftCollectionsFromJSON,
    NftCollectionsToJSON,
    NftItemFromJSON,
    NftItemToJSON,
    NftItemsFromJSON,
    NftItemsToJSON,
} from '../models/index';

export interface GetItemsFromCollectionRequest {
    accountId: string;
    limit?: number;
    offset?: number;
}

export interface GetNftCollectionRequest {
    accountId: string;
}

export interface GetNftCollectionsRequest {
    limit?: number;
    offset?: number;
}

export interface GetNftItemByAddressRequest {
    accountId: string;
}

export interface GetNftItemsByAddressesRequest {
    getAccountsRequest?: GetAccountsRequest;
}

/**
 * NFTApi - interface
 * 
 * @export
 * @interface NFTApiInterface
 */
export interface NFTApiInterface {
    /**
     * Get NFT items from collection by collection address
     * @param {string} accountId account ID
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getItemsFromCollectionRaw(requestParameters: GetItemsFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItems>>;

    /**
     * Get NFT items from collection by collection address
     */
    getItemsFromCollection(requestParameters: GetItemsFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItems>;

    /**
     * Get NFT collection by collection address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftCollectionRaw(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftCollection>>;

    /**
     * Get NFT collection by collection address
     */
    getNftCollection(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftCollection>;

    /**
     * Get NFT collections
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftCollectionsRaw(requestParameters: GetNftCollectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftCollections>>;

    /**
     * Get NFT collections
     */
    getNftCollections(requestParameters: GetNftCollectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftCollections>;

    /**
     * Get NFT item by its address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftItemByAddressRaw(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItem>>;

    /**
     * Get NFT item by its address
     */
    getNftItemByAddress(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItem>;

    /**
     * Get NFT items by their addresses
     * @param {GetAccountsRequest} [getAccountsRequest] a list of account ids
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NFTApiInterface
     */
    getNftItemsByAddressesRaw(requestParameters: GetNftItemsByAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItems>>;

    /**
     * Get NFT items by their addresses
     */
    getNftItemsByAddresses(requestParameters: GetNftItemsByAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItems>;

}

/**
 * 
 */
export class NFTApi extends runtime.BaseAPI implements NFTApiInterface {

    /**
     * Get NFT items from collection by collection address
     */
    async getItemsFromCollectionRaw(requestParameters: GetItemsFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItems>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getItemsFromCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/nfts/collections/{account_id}/items`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsFromJSON(jsonValue));
    }

    /**
     * Get NFT items from collection by collection address
     */
    async getItemsFromCollection(requestParameters: GetItemsFromCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItems> {
        const response = await this.getItemsFromCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get NFT collection by collection address
     */
    async getNftCollectionRaw(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftCollection>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getNftCollection.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/nfts/collections/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftCollectionFromJSON(jsonValue));
    }

    /**
     * Get NFT collection by collection address
     */
    async getNftCollection(requestParameters: GetNftCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftCollection> {
        const response = await this.getNftCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get NFT collections
     */
    async getNftCollectionsRaw(requestParameters: GetNftCollectionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftCollections>> {
        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/nfts/collections`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftCollectionsFromJSON(jsonValue));
    }

    /**
     * Get NFT collections
     */
    async getNftCollections(requestParameters: GetNftCollectionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftCollections> {
        const response = await this.getNftCollectionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get NFT item by its address
     */
    async getNftItemByAddressRaw(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItem>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getNftItemByAddress.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/nfts/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemFromJSON(jsonValue));
    }

    /**
     * Get NFT item by its address
     */
    async getNftItemByAddress(requestParameters: GetNftItemByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItem> {
        const response = await this.getNftItemByAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get NFT items by their addresses
     */
    async getNftItemsByAddressesRaw(requestParameters: GetNftItemsByAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NftItems>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/v2/nfts/_bulk`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GetAccountsRequestToJSON(requestParameters.getAccountsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NftItemsFromJSON(jsonValue));
    }

    /**
     * Get NFT items by their addresses
     */
    async getNftItemsByAddresses(requestParameters: GetNftItemsByAddressesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NftItems> {
        const response = await this.getNftItemsByAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
