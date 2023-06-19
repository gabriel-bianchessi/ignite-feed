// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Post } from './Post'
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          Sidebar
        </aside>
        <main>
          <Post
            author="Gabriel Bianchessi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda odio optio corporis dolorum numquam porro explicabo quo officiis voluptatum! Culpa ab odio modi officiis placeat incidunt quis eligendi minus?"
          />
          <Post
            author="Miguel Bianchessi"
            content="O header ta vindo"
          />
        </main>
      </div>
    </div>
  )
}