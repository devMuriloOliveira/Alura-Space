import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./Cards";

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  const tags = [...new set(fotos.map((valor) => valor.tag))]
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} />
      <Cards itens={itens} styles={styles} />
    </section>
  );
}
