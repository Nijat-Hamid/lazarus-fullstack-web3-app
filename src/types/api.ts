export type ICoinListWithMarket = {
    id:string;
    symbol:string;
    name:string;
    image:string;
    current_price:number;
    market_cap:number;
    market_cap_rank:number;
    fully_diluted_valuation:number;
    total_volume:number;
    high_24h:number;
    low_24h:number;
    price_change_24h:number;
    price_change_percentage_24h:number;
    market_cap_change_24h:number;
    market_cap_change_percentage_24h:number;
    circulating_supply:number;
    total_supply:number;
    max_supply:number;
    ath:number;
    ath_change_percentage:number;
    ath_date:string;
    atl:number;
    atl_change_percentage:number;
    atl_date:string;
    roi:null;
    last_updated:string
}

export type IPoolData = {
    status:string;
    data:Array<{
        chain:string;
        project:string;
        symbol:string;
        tvlUsd:number;
        apyBase:number | null;
        apyReward:number | null;
        apy:number | null;
        rewardTokens:null | Array<string>;
        pool:string;
        apyPct1D:number;
        apyPct7D:number;
        apyPct30D:number;
        stablecoin:boolean;
        ilRisk:string;
        exposure:string;
        predictions:{
            predictedClass:string;
            predictedProbability:number;
            binnedConfidence:number
        };
        poolMeta:null | string;
        mu:number;
        sigma:number;
        count:number;
        outlier:boolean;
        underlyingTokens:Array<string>;
        il7d:number | null;
        apyBase7d:number | null;
        apyMean30d:number | null;
        volumeUsd1d:null | number;
        volumeUsd7d:null | number;
        apyBaseInception:null | number
    }>
}