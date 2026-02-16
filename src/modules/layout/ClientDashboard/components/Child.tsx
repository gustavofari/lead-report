import React from 'react'

const Child = React.memo(({ onClick }: { onClick: () => void }) => {
  console.log('render')
  return <button onClick={onClick}>Click</button>
})

export default Child
