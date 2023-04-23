const { generateApi } = require('swagger-typescript-api');
const path = require('path');

generateApi({
    name: 'EntrackApi',
    output: path.resolve(process.cwd(), './src/api/EntrackApi.ts'),
    url: 'https://localhost:7031/swagger/v1/swagger.json',
    httpClientType: 'axios',
});
