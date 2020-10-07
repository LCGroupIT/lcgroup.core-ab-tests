export interface AbTestOptions {
    versions: string[];
    domain?: string;
    versionForCrawlers?: string;
    scope?: string;
    expiration?: number;
    weights?: {
        [x: string]: number;
    };
}

export interface GuardData {
    ab: GuardDataTest | GuardDataTest[];
}

export interface GuardDataTest extends AbTestOptions {
    redirectUrls?: {[key: string]: string};
}
