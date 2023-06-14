/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AccountAddress
 */
export interface AccountAddress {
    /**
     * 
     * @type {string}
     * @memberof AccountAddress
     */
    address: string;
    /**
     * Display name. Data collected from different sources like moderation lists, dns, collections names and over.
     * @type {string}
     * @memberof AccountAddress
     */
    name?: string;
    /**
     * Is this account was marked as part of scammers activity
     * @type {boolean}
     * @memberof AccountAddress
     */
    isScam: boolean;
    /**
     * 
     * @type {string}
     * @memberof AccountAddress
     */
    icon?: string;
}

/**
 * Check if a given object implements the AccountAddress interface.
 */
export function instanceOfAccountAddress(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "isScam" in value;

    return isInstance;
}

export function AccountAddressFromJSON(json: any): AccountAddress {
    return AccountAddressFromJSONTyped(json, false);
}

export function AccountAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'isScam': json['is_scam'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
    };
}

export function AccountAddressToJSON(value?: AccountAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'name': value.name,
        'is_scam': value.isScam,
        'icon': value.icon,
    };
}

