"use client"

import { addArt } from "@/art/add"
import { revalidatePath } from "next/cache"
import { FC, useState } from "react"
import { handleAddArt } from "./Action"
import { Button } from "@mantine/core"

interface AddArtFormProps {
}
export const AddArtForm: FC<AddArtFormProps> = () => {
    const [title, setTitle] = useState("title")
    const [author, setauthor] = useState("author")
    async function handleClick() {
        await handleAddArt({
            id: "art" + Date.now(),
            title: title,
            author: author,
            tag: ["aaa", "bbb"],
        })

    }
    return (
        <div>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={author} onChange={e => setauthor(e.target.value)} />
            {/* <button onClick={handleClick}>追加</button> */}
            <Button
                onClick={handleClick}
                variant="gradient"
                gradient={{ from: 'lime', to: 'cyan', deg: 90 }}
            >
                Gradient button
            </Button>
        </div>

    )
}
