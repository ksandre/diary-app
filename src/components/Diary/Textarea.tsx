import React from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';

function Textarea() {
    return (
        <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Minimum 3 rows"
            style={{ width: 200 }}
        />
    )
}

export default Textarea