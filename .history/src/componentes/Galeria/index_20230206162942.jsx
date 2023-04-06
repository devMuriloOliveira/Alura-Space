import React, { useState } from "react";
import Tags from "../Tags";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";
import Cards from "./Cards";

export default function Galeria() {
  const [itens, setItens] = useState(fotos)
  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags />
      <Cards itens={fotos} styles={styles} />
    </section>
  );
}
