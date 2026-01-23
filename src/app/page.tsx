import "@/style/globals.css"
import { Seo } from "@/ui/components/seo/seo"
import {Typography} from "@/ui/design-system/typography/typography";


export default function Home() {
  return (
      <html lang="fr">
          <head>
              <meta charSet="utf-8" />
          </head>
          <body>
              <Seo title="Louis Morel" subtitle="Étudiant en informatique – Développement web & projets perso" />
              <Seo title="Tenzing Bernard" subtitle="Étudiant en DnMADE – Projets étduant & perso" />
              <Typography variant="h1" component="h1">
                  Text
              </Typography>

          </body>
      </html>
  )
}