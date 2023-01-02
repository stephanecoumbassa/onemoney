import { db } from "./Db";

// Créez une nouvelle entrée
async function categoryAdd(name: string, icon: string) {
  const id = await db.category.add({ name, icon });
  return id;
}

async function categoryAll() {
  return db.category.toArray();
}

// Lisez une entrée existante
async function categoryGet(id: number) {
  return db.category.get(id);
}

export default {
  categoryAdd,
  categoryAll,
  categoryGet,
};
