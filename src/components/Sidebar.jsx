// eslint-disable-next-line no-unused-vars
import React from 'react'
import { PencilLine } from "phosphor-react"
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=50" 
        alt="" 
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar} 
          src="https://github.com/gabriel-bianchessi.png" 
          alt=""
        />
        <strong>Gabriel Bianchessi</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
