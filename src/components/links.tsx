import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:dev.marshallharvey@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/harveymarshall',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/harvey-marshall-827531160/',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@dev.marshallharvey',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
