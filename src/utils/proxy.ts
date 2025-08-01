const https = require('https');
const { HttpsProxyAgent } = require('https-proxy-agent');

const http = require('http');
const { HttpProxyAgent } = require('http-proxy-agent');
const setupProxy = () => {
  console.log('process.env.GLOBAL_AGENT_HTTP_PROXY', process.env.GLOBAL_AGENT_HTTP_PROXY);
  if (process.env.GLOBAL_AGENT_HTTP_PROXY) {
    const httpsProxyAgent = new HttpsProxyAgent(process.env.GLOBAL_AGENT_HTTP_PROXY);
    const httpProxyAgent = new HttpProxyAgent(process.env.GLOBAL_AGENT_HTTP_PROXY);
    // 覆盖全局Agent
    https.globalAgent = httpsProxyAgent;
    http.globalAgent = httpProxyAgent;
  }
};

export default setupProxy;
