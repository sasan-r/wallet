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

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';
import type { NftItem } from './NftItem';
import {
    NftItemFromJSON,
    NftItemFromJSONTyped,
    NftItemToJSON,
} from './NftItem';
import type { Price } from './Price';
import {
    PriceFromJSON,
    PriceFromJSONTyped,
    PriceToJSON,
} from './Price';

/**
 * 
 * @export
 * @interface NftPurchaseAction
 */
export interface NftPurchaseAction {
    /**
     * 
     * @type {string}
     * @memberof NftPurchaseAction
     */
    auctionType: NftPurchaseActionAuctionTypeEnum;
    /**
     * 
     * @type {Price}
     * @memberof NftPurchaseAction
     */
    amount: Price;
    /**
     * 
     * @type {NftItem}
     * @memberof NftPurchaseAction
     */
    nft: NftItem;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftPurchaseAction
     */
    seller: AccountAddress;
    /**
     * 
     * @type {AccountAddress}
     * @memberof NftPurchaseAction
     */
    buyer: AccountAddress;
}


/**
 * @export
 */
export const NftPurchaseActionAuctionTypeEnum = {
    DnsTg: 'DNS.tg',
    Getgems: 'getgems',
    Basic: 'basic'
} as const;
export type NftPurchaseActionAuctionTypeEnum = typeof NftPurchaseActionAuctionTypeEnum[keyof typeof NftPurchaseActionAuctionTypeEnum];


/**
 * Check if a given object implements the NftPurchaseAction interface.
 */
export function instanceOfNftPurchaseAction(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "auctionType" in value;
    isInstance = isInstance && "amount" in value;
    isInstance = isInstance && "nft" in value;
    isInstance = isInstance && "seller" in value;
    isInstance = isInstance && "buyer" in value;

    return isInstance;
}

export function NftPurchaseActionFromJSON(json: any): NftPurchaseAction {
    return NftPurchaseActionFromJSONTyped(json, false);
}

export function NftPurchaseActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NftPurchaseAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auctionType': json['auction_type'],
        'amount': PriceFromJSON(json['amount']),
        'nft': NftItemFromJSON(json['nft']),
        'seller': AccountAddressFromJSON(json['seller']),
        'buyer': AccountAddressFromJSON(json['buyer']),
    };
}

export function NftPurchaseActionToJSON(value?: NftPurchaseAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auction_type': value.auctionType,
        'amount': PriceToJSON(value.amount),
        'nft': NftItemToJSON(value.nft),
        'seller': AccountAddressToJSON(value.seller),
        'buyer': AccountAddressToJSON(value.buyer),
    };
}

