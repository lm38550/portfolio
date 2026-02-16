import "@/style/globals.css"
import { Title } from "@/ui/components/title/title"
import {Typography} from "@/ui/design-system/typography/typography";


export default function Home() {
  return (
      <>
          <Title title="Louis Morel" subtitle="Étudiant en informatique – Développement web & projets perso" />
          <Typography variant="h1" component="h1">Text</Typography>
          <Typography variant="h2" component="h2">Text</Typography>
          <Typography variant="h3" component="h3">Text</Typography>
          <Typography variant="h4" component="h4">Text</Typography>
          <Typography variant="h5" component="h5">Text</Typography>
          <Typography variant="body-lg" component="p">Text</Typography>
          <Typography variant="body-base" component="p">Text</Typography>
          <Typography variant="body-sm" component="p">Text</Typography>
      </>
  )
}