"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ShopifyBuy = require("shopify-buy");
exports.default = (ctx, inject) => {
    const config = {
        domain: process.env.SHOPIFY_DOMAIN || '<%= options.domain %>',
        storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN || '<%= options.storefrontAccessToken %>',
    };
    const client = ShopifyBuy.buildClient(config);
    // Inject shopify to the context as $shopify
    ctx.$shopify = client;
    inject('shopify', client);
};
