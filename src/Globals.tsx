export const PROPOSAL_TEMPLATE_ID: number = (window as any).PROPOSAL_TEMPLATE_ID ? (window as any).PROPOSAL_TEMPLATE_ID : "";

export const API_KEY: any = "kagbbqufq1atfo7mdrrn9c6qps";

export const PARENT: any = (window as any).parent;
export const LOCALENV: any = (window as any).LOCALENV;

export const SERVER_PREFIX_PATH = (LOCALENV ? "local" : "rest");

export var proposalProducts: any = {};
export const BUILD_META_INFO: string = (window as any).buildMetaInfo ? (window as any).buildMetaInfo : undefined;
export const PROPOSAL_JSON: any = (window as any).PROPOSAL_JSON;
export const id: any = (window as any).id;
export const PREDESIGNED_TEMPLATE_NAME: string = (window as any).PREDESIGNED_TEMPLATE_NAME;

export const SERVER_HOST_DOMAIN_URL: string = ((window as any).SERVER_HOST_DOMAIN_URL) ? (window as any).SERVER_HOST_DOMAIN_URL : "/";

export const PRODUCT_SEARCH: string = SERVER_HOST_DOMAIN_URL + SERVER_PREFIX_PATH + "/api/panel/products/search-old?&page_size=" + `${PARENT.CURRENT_USER_JSON.pageSize ? PARENT.CURRENT_USER_JSON.pageSize : '10'}` + "&sort_key=-created_time"

export const PRODUCT_SEARCH_QUERY: string = SERVER_HOST_DOMAIN_URL + SERVER_PREFIX_PATH + "/api/panel/products/search-old?"

export const VIDEO_TEMPLATES_FETCH_URL: string = SERVER_HOST_DOMAIN_URL + SERVER_PREFIX_PATH + "/api/panel/video-marketing?page_size=500";
export const LOGGED_IN_USER_SIGNTURE: string = (PARENT && PARENT.CURRENT_USER_JSON && PARENT.CURRENT_USER_JSON.signature) ? PARENT.CURRENT_USER_JSON.signature : "Signature Comes here...";

