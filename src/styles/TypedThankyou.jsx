import React from 'react'
import Typewriter from 'typewriter-effect'

const TypedThankyou = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Thanks', 'ಧನ್ಯವಾದ', 'धन्यवाद्', 'ధన్యవాదాలు', 'நன்றி'],
          autoStart: true,
          loop: true,
          delay: 10,
          deleteSpeed: 20
        }}
      />
    </div>
  )
}

export default TypedThankyou
