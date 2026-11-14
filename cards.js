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
  }
];
if (typeof module !== "undefined") module.exports = CARDS;
