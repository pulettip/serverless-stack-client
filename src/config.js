export default {
    s3: {
      REGION: "eu-west-1", // "YOUR_S3_UPLOADS_BUCKET_REGION",
      BUCKET: "notes-app-uploads-puletti" // "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "eu-west-1", //"YOUR_API_GATEWAY_REGION",
      URL: "https://v9klonwfk7.execute-api.eu-west-1.amazonaws.com/prod" // "YOUR_API_GATEWAY_URL"
    },
    cognito: {
      REGION: "eu-west-1", //"YOUR_COGNITO_REGION",
      USER_POOL_ID: "eu-west-1_D2D17cUnb", // "YOUR_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "5j58l70l3m4h4s2ngr8p8debo9", // "YOUR_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "eu-west-1:64cf5b84-09eb-4d3a-9e14-c8306aa9752f" // "YOUR_IDENTITY_POOL_ID"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51GxGrRBmC3H9RVJIe1gmioDNjD4Kj6VYcMaineyBwOyRq4nDFyu2vNuO3LSC4F5gzxJetzsKcOR3LETCiPMQ4Lhj00nTcAsFqv",
  };