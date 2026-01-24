import "@/style/globals.css"
import { Title } from "@/ui/components/title/title"
import {Typography} from "@/ui/design-system/typography/typography";


export default function Home() {
  return (
      <>
          <Title title="Louis Morel" subtitle="Étudiant en informatique – Développement web & projets perso" />
          <Typography variant="h1" component="h1">
              Text
          </Typography>

      </>
  )
}