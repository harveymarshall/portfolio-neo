import {
  type IconType,
  SiApacheairflow,
  SiAzuredevops,
  SiSqlite,
  SiPython,
  SiJinja,
} from '@icons-pack/react-simple-icons'

export type Project = {
  name: string
  description: string
  icon: IconType
  skillsUsed: IconType[]
  repoUrl: string
}

const PROJECTS: Project[] = [
  {
    name: 'Airflow Dag Factory',
    description:
      'A project built to obfuscate python code away from building apache airflow dags. This tool allows pipelines to be built using YAML config files. Those files are then used to build and deploy the pipelines to an apache airflow instance.',
    icon: SiApacheairflow,
    skillsUsed: [SiPython, SiJinja],
    repoUrl: 'https://github.com/harveymarshall/airflow-dag-factory',
  },
  {
    name: 'Azure Blob Storage MCP Server',
    description:
      'This project provides an MCP server for interacting with Azure Blob Storage using the MCP protocol. You can connect this server to clients like Claude Desktop for natural language access to your Azure Blob Storage resources.',
    icon: SiAzuredevops,
    skillsUsed: [SiPython],
    repoUrl: 'https://github.com/harveymarshall/azure-blob-storage-mcp-server',
  },
  {
    name: 'Data Cleaning Agent',
    description:
      'AI Agent that takes a raw dataset and recommends steps for cleaning the data based on User context provided to the Agent.',
    icon: SiSqlite,
    skillsUsed: [SiPython],
    repoUrl: 'https://github.com/harveymarshall/data_cleaning_agent',
  },
]

export default PROJECTS
