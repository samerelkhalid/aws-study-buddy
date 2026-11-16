const CARDS = [
  {
    service: "Amazon ECS",
    description: "Amazon ECS runs and manages Docker containers on a cluster of servers or on serverless AWS Fargate.",
    category: "Containers",
    docsUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html"
  },
  {
    service: "AWS IAM",
    description: "AWS IAM controls who can sign in to your AWS account and what they are allowed to do.",
    category: "Security",
    docsUrl: "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"
  },
  {
    service: "Amazon Bedrock",
    description: "Amazon Bedrock lets you build generative AI apps using foundation models from several providers through one API.",
    category: "Machine Learning / AI",
    docsUrl: "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
  },
  {
    service: "Amazon S3",
    description: "Amazon S3 stores any amount of files (called objects) in folders called buckets, so you can keep things like images, backups and website files in the cloud.",
    category: "Storage",
    docsUrl: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
  },
  {
    service: "Amazon DynamoDB",
    description: "Amazon DynamoDB is a fast NoSQL database (one that stores data as flexible items instead of fixed tables and rows) that AWS runs and scales for you.",
    category: "Database",
    docsUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
  },
  {
    service: "Amazon CloudWatch",
    description: "Amazon CloudWatch watches your AWS resources and apps, collecting numbers (metrics) and logs and alerting you with alarms when something looks wrong.",
    category: "Monitoring",
    docsUrl: "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
  },
  {
    service: "Amazon Cognito",
    description: "Amazon Cognito adds sign-up and sign-in to your web and mobile apps, including logging in with accounts like Google or Facebook.",
    category: "Security",
    docsUrl: "https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html"
  },
  {
    service: "Amazon CloudFront",
    description: "Amazon CloudFront makes websites load faster by keeping copies of your files in data centers around the world, close to your users.",
    category: "Networking",
    docsUrl: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
  },
  {
    service: "AWS Fargate",
    description: "AWS Fargate runs your containers without you having to set up or look after any servers, and you pay only for what each app uses.",
    category: "Containers",
    docsUrl: "https://docs.aws.amazon.com/decision-guides/latest/decision-guides/choosing-aws-compute-service.html"
  },
  {
    service: "Amazon Bedrock AgentCore",
    description: "Amazon Bedrock AgentCore lets you build, run and monitor AI agents (programs that use an AI model to take actions for you) without managing any servers.",
    category: "Machine Learning / AI",
    docsUrl: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html"
  },
  {
    service: "AWS Lambda",
    description: "AWS Lambda runs your code when something happens, like a file upload, without you managing any servers.",
    category: "Compute",
    docsUrl: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
  }
];
if (typeof module !== "undefined") module.exports = CARDS;
