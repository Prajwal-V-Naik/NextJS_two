import React from 'react'
import Link from 'next/link'
import'../styles/module.css'
import styles from '/styles/home1.module.css'
function About() {
  
  return (
    <main className='h-[100vh] flex flex-col items-center justify-center'>
      <div className='text-center headingOne  hover:bg-blue-300'>
      <h1>This is about YOU</h1>
      <Link href='/'><button className={styles.buttonCss}>find</button></Link>
      {/* console.log(styles); */}
    </div>
    </main>
  )
}

export default About