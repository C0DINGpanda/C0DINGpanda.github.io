import React from 'react'
import Typewriter from 'typewriter-effect'

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Hello!', 'ನಮಸ್ತೆ!', 'नमस्कार!'],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 20
        }}
      />
    </div>
  )
}

export default Typed
