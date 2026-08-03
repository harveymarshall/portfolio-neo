import {
  type IconType,
  SiDocker,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiSqlite,
  SiGooglebigquery,
  SiApacheairflow,
  SiGraphql,
  SiApachekafka,
  SiTypescript,
  SiGooglecloud,
  SiAmazonaws,
  SiMicrosoftazure,
} from '@icons-pack/react-simple-icons'

export type SkillGroup = {
  field: string
  skills: { skill: string; icon: IconType }[]
}

const SKILLS: SkillGroup[] = [
  {
    field: 'Data Engineering',
    skills: [
      { skill: 'python', icon: SiPython },
      { skill: 'sql', icon: SiSqlite },
      { skill: 'bigquery', icon: SiGooglebigquery },
      { skill: 'airflow', icon: SiApacheairflow },
      { skill: 'graphql', icon: SiGraphql },
      { skill: 'kafka', icon: SiApachekafka },
    ],
  },
  {
    field: 'Full Stack Development',
    skills: [
      { skill: 'javascript', icon: SiJavascript },
      { skill: 'react', icon: SiReact },
      {
        skill: 'nodejs',
        icon: SiNodedotjs,
      },
      {
        skill: 'docker',
        icon: SiDocker,
      },
      { skill: 'typescript', icon: SiTypescript },
    ],
  },
  {
    field: 'Cloud Development',
    skills: [
      { skill: 'gcp', icon: SiGooglecloud },
      { skill: 'aws', icon: SiAmazonaws },
      { skill: 'azure', icon: SiMicrosoftazure },
    ],
  },
]

export default SKILLS
