import {
  type IconType,
  SiApacheairflow,
  SiAzuredevops,
  SiSqlite,
  SiPython,
  SiJinja
} from "@icons-pack/react-simple-icons"

const PROJECTS: {
  name: string
  description: string
  project_icon: IconType
  skills_used: IconType[]
  repoUrl: string
}[] = [
    {
      name: 'Airflow Dag Factory',
      description: 'A project built to obfuscate python code away from building apache airflow dags. This tool allows pipelines to be built using YAML config files. Those files are then used to build and deploy the pipelines to an apache airflow instance.',
      project_icon: SiApacheairflow,
      skills_used: [SiPython, SiJinja],
      repoUrl: 'https://github.com/harveymarshall/airflow-dag-factory',
    },
    {
      name: 'Azure Blob Storage MCP Server',
      description: 'This project provides an MCP server for interacting with Azure Blob Storage using the MCP protocol. You can connect this server to clients like Claude Desktop for natural language access to your Azure Blob Storage resources.',
      project_icon: SiAzuredevops,
      skills_used: [SiPython],
      repoUrl: 'https://github.com/harveymarshall/azure-blob-storage-mcp-server',
    },
    {
      name: 'Data Cleaning Agent',
      description: 'AI Agent that takes a raw dataset and recommends steps for cleaning the data based on User context provided to the Agent.',
      project_icon: SiSqlite,
      skills_used: [SiPython],
      repoUrl: 'https://github.com/harveymarshall/data_cleaning_agent',
    },
  ]

export default PROJECTS
