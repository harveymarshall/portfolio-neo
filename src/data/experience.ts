export type Role = {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
}

const CURRENT_ROLE: Role = {
  company: 'Starlinks Global',
  role: 'Senior Full Stack Engineer',
  description:
    'Currently working on building a full-stack application to streamline Finance Team operations and workflows. Building both the React Frontend UI and Python Serverless backend API. Ensuring the application is fully stable and secure utilising best coding practices to reduce repeated code and improve the efficiency of API tasks. The application is currently hosted on Azure so I am building CICD workflows to ensure the app is continually deployed and running securely.',
  startDate: 'October 2025',
  endDate: 'Current',
}

const PAST_ROLES: Role[] = [
  {
    company: 'Pets At Home',
    role: 'Data Engineer',
    description:
      'I worked within the MLOps squad at pets to build out a new Data Lakehouse platform using new Microsoft Fabric tooling, this platform will be used to facilitate Operational analytics and Machine Learning Platforms. I looked at ways we can utilise AI within our workflow using AI agents to increase productivity, Agents that allow our in-store assistants to chat to and connect to our data. I have been utilising both Azure AI Foundry and Googles Vertex AI Platform to develop agents. I also work within the Analytics Platform and Data Engineering team at Pets At Home. Where the past few months I have been the single colleague working on designing solutions to ingest data from varying sources into our Data-lake on the Google Cloud Platform. The main subject of my work has been to integrate Azure Event services such as Service Bus and Event Hub. I have also created a custom application allowing non-technical users to generate Apache airflow pipelines just using YAML files. Alongside other work I have used docker containers to build code used within Apache Airflow to ingest and sink various data to a variety of sources and destinations. I also helped to build and manage a system for deploying DBT models within this new DAG infrastructure and used the DBT tooling to help build out our data lake using BigQuery External tables defined on top of Google Cloud Storage buckets. As part of this I completed the DBT fundamentals course to ensure my skills in DBT were adequate.',
    startDate: 'November 2024',
    endDate: 'October 2025',
  },
  {
    company: 'N Brown Group',
    role: 'Lead Data Engineer',
    description:
      'I worked as a Lead Data Engineer helping to shape and form the new analytics platform for use throughout the business. This has included a review of how Google Cloud Platform infrastructure is managed and used as well as IAM policies. I have also began work to reimagine the data ingestion processes used within the business to help improve and shape the best ways of working so data is made available to the business in an efficient and structured manner. Alongside this work I have also been skilling up on the use of DBT for data transformation particularly in the use of creating and managing temporal data tables within Google BigQuery.',
    startDate: 'July 2024',
    endDate: 'September 2024',
  },
  {
    company: 'Pets At Home',
    role: 'Senior Data Engineer',
    description:
      'I worked within the Analytics Platform and Data Engineering team at Pets At Home. Where the past few months I have been the single colleague working on designing solutions to ingest data from varying sources into our Data lake on the Google Cloud Platform. The main subject of my work has been to integrate Azure Event services such as Service Bus and Event Hub. I have also created a custom application allowing non-technical users to generate Apache airflow pipelines just using YAML files. Alongside other work I have used docker containers to build code used within apache airflow to ingest and sink various data to a variety of sources and destinations. I also helped to build and manage a system for deploying dbt models within this new DAG infrastructure and used the DBT tooling to help build out our data lake using BigQuery External tables defined on top of Google Cloud Storage buckets. As part of this I completed the DBT fundamentals course to ensure my skills in DBT were adequate.',
    startDate: 'November 2021',
    endDate: 'June 2024',
  },
]

export { CURRENT_ROLE, PAST_ROLES }
