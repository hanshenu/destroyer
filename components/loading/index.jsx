import React from 'react'
import Radium from 'radium'

const Loading = props =>
  <section style={[styles.base, props.loading.display ? styles.show : styles.hide]}>
    <span style={styles.span}>{props.loading.message}</span>
  </section>

export default Radium(Loading)

const styles = {
  base: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(92, 67, 232, .8)',
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 60,
    transition: '.5s',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '120%'
  },
  span: {
    margin: 'auto'
  },
  show: {
    opacity: 1,
    pointerEvents: 'auto'
  },
  hide: {
    opacity: 0,
    pointerEvents: 'none'
  }
}
