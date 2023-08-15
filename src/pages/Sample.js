import React, { memo } from 'react'

const Sample = ({handleDecrement}) => {


  console.log('child render')
  return (
    <div>

      <h1> This is child component</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur, vel nisi ut consequuntur quia a velit voluptatum eos blanditiis! Tenetur dolores modi hic nobis necessitatibus culpa vero inventore dolorem ut ad dicta praesentium, ipsum molestias quaerat aliquam velit in cupiditate ea, ex porro natus mollitia labore voluptatum accusantium. Pariatur?</p>
    </div>
  )
}

export default memo(Sample)