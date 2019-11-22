function handler (data, serverless, options) {
    rel = {
        AdminAmplify: {
            Auth: {
                region: "ap-northeast-1",
                userPoolId: data.AdminUserPoolId,
                userPoolWebClientId: data.AdminUserPoolClientId
            }
        },
        Amplify: {
            Auth: {
                region: "ap-northeast-1",
                userPoolId: data.UserPoolId,
                userPoolWebClientId: data.UserPoolClientId
            }
        },
        apiGateway: {
            endpoint: data.ServiceEndpoint
        }
    };
    var fs = require("fs");
    try {
        fs.writeFileSync("../FrontEnd/src/assets/aws-config.js", 'AWSConfig = ' + JSON.stringify(rel, null, 4));
    }catch(e){
        console.log(e);
    }

    
}

module.exports = { handler }