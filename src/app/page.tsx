import { getTrends } from "@/art/getTrends"
//import { add } from "@/art/add"

export default async function Home() {
  const arts = getTrends()
  return (
    <div>

      <h1>作品登録</h1>

      <button className='btn btn-primary mt-3'>追加</button>

      <div>
        {(await arts).map(art =>
          <div key={art.id}>
            <h1>{art.id}</h1>
            <h2>{art.title}</h2>
            <h3>{art.author}</h3>
            <h4>{art.tag}</h4>
          </div>)}

      </div>


    </div>
  )
}
