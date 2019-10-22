import cdk = require('@aws-cdk/core');
import lambda = require("@aws-cdk/aws-lambda");


export class PdfLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const htmlToPdfHandler = new lambda.Function(this, "htmlToPdfHandler", {
      runtime: lambda.Runtime.NODEJS_8_10,
      code: lambda.Code.asset("aws-lambda-wkhtmltopdf"),
      handler: "index.handler",
      memorySize: 512,
      timeout: cdk.Duration.seconds(10)
    });


    // The code that defines your stack goes here
  }
}
