"use server";

import { addArt } from "@/art/add";
import { Art } from "@/art/type";
import { revalidatePath } from "next/cache";

export async function handleAddArt(art: Art) {
  await addArt(art);
  revalidatePath("/");
}
