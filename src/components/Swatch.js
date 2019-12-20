import React from 'react'
import { PhotoshopPicker as Picker } from 'react-color'

const Swatch = ({ setColor }) => {
  const handleChangeComplete = color => {
    setColor(color.hex)
  }
  return (
    <>
      <div className="swatch">
        <Picker onChangeComplete={handleChangeComplete} />
      </div>
    </>
  )
}

export default React.memo(Swatch)
