# asw-lambda-poc 

## Reference 
* Cloud formation reference - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-function.html 
* Anatomy - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-anatomy.html
* CLI reference - https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html
* Outputs - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html
* Parameters - https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/parameters-section-structure.html 
* API Gateway Reference ID - https://docs.aws.amazon.com/apigateway/api-reference/resource/
* API Gateway mapping reference - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html


## Commands 
* Package `aws cloudformation package --template-file cloudformation.json --s3-bucket temp-aws-lambda-poc --output-template-file cfoutput.json --use-json --force-upload`
* Deploy `aws cloudformation deploy --template-file /Users/vinaymavi/github/aws-lambda-poc/cfoutput.json --stack-name aws-lambda-poc-cf-stack3 --capabilities CAPABILITY_IAM`
