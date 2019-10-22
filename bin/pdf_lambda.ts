#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { PdfLambdaStack } from '../lib/pdf_lambda-stack';

const app = new cdk.App();
new PdfLambdaStack(app, 'PdfLambdaStack');
