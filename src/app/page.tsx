import { getTrends } from "@/art/getTrends"
import { AddArtForm } from "./AddArtForm"
import { Badge } from "@mantine/core"
//import { add } from "@/art/add"

export default async function Home() {
  const arts = await getTrends()
  function handleClick() {
    console.log("increment like count")
  }
  return (
    <div>

      <h1>作品登録</h1>

      <div>
        {arts.map(art =>
          <div key={art.id}>
            <h2>{art.title}</h2>
            <div>
              {art.id}
            </div>
            {art.author}
            {art.tag.map(tag =>
              <Badge key={tag} color="blue">{tag}</Badge>
            )}

          </div>)}

        <AddArtForm></AddArtForm>

      </div>

    </div>
  )
}
